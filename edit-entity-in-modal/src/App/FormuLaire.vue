<template>
  <div>
    <div>
      <b-alert
        class="building-fields d-flex align-items-center"
        :variant="'info'"
        fade
        :show="building_fields"
      >
        <h3 class="d-flex align-items-center mb-0 ml-0 mr-auto">
          Construction du formulaire encours
        </h3>
        <b-icon
          icon="three-dots"
          animation="cylon"
          font-scale="4"
          class="ml-5"
        ></b-icon>
      </b-alert>
      <b-alert
        class="building-fields d-flex align-items-center"
        :variant="'primary'"
        fade
        :show="running"
      >
        <h3 class="d-flex align-items-center mb-0 ml-0 mr-auto">
          Encours d'execution
        </h3>
        <b-icon
          icon="three-dots"
          animation="cylon"
          font-scale="4"
          class="ml-5"
        ></b-icon>
      </b-alert>
    </div>
    <b-form v-if="show" @submit.prevent="onSubmit" @reset="onReset">
      <component
        :is="container.template"
        v-for="(container, i) in fields"
        :key="i"
        :entity="container.entity"
        :class-entity="['pt-1']"
      >
        <component
          :is="render.template"
          v-for="(render, k) in container.fields"
          :key="k"
          :field="render.field"
          :model="render.model"
          :entities="render.entities"
          :class-css="['mb-5']"
          :parent-name="i + '.entity.'"
          :parent-child-name="i + '.entities.'"
          namespace-store=""
          @addNewValue="addNewValue($event, render)"
          @removeField="removeField($event, render)"
          @array_move="array_move($event, render)"
        ></component>
      </component>
    </b-form>
  </div>
</template>

<script>
import request from "../request";
import { mapState } from "vuex";

export default {
  name: "FormuLaire",
  props: {
    showSubmit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    ...mapState({
      fields: (state) => state.fields,
      building_fields: (state) => state.building_fields,
      running: (state) => state.running,
    }),
    idEntity() {
      if (this.form.label !== "") {
        var id = request.generateIdEntityType(this.form.label);
        this.setId(id);
        return id;
      } else return "";
    },
  },

  methods: {
    /**
     * @private
     * @param {*} event
     */
    onSubmit() {
      this.submit();
    },
    /**
     * @public
     */
    submit() {
      return this.$store.dispatch("saveEntities");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      // ...
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    setId(id) {
      // Si l'uuid n'existe pas, alors c'est une creation de type, on peut generer l'id.
      if (!this.form.uuid) this.form.id = id;
    },
    addNewValue(value, render) {
      this.model[render.field.name].push(value);
    },
    removeField(index, render) {
      this.model[render.field.name].splice(index, 1);
    },
    array_move(evt, render) {
      const moveItem = (arr, fromIndex, toIndex) => {
        let itemRemoved = arr.splice(fromIndex, 1); // assign the removed item as an array
        arr.splice(toIndex, 0, itemRemoved[0]); // insert itemRemoved into the target index
        return arr;
      };
      const vals = moveItem(
        this.model[render.field.name],
        evt.oldIndex,
        evt.newIndex
      );
      this.$store.dispatch("setValue", {
        value: vals,
        fieldName: render.field.name,
      });
    },
  },
};
</script>
