<!-- Ce fichier permet de gerer tous edition de cntenu quii doit se faire via un model. -->
<template>
  <b-modal
    id="b-modal-manage-project"
    v-model="openModel"
    title="BootstrapVue"
    size="lg"
    footer-bg-variant="light"
    header-bg-variant="light"
    body-class="edit-entity-in-modal"
    :hide-footer="false"
    :no-close-on-backdrop="false"
    @ok="handleOk"
  >
    <template #modal-header>
      <slot name="header"></slot>
    </template>
    <template #default>
      <b-alert variant="danger" fade :show="hasErrorOnprocess">
        <error-message />
      </b-alert>
      <formEdit ref="formEdit" />
    </template>
    <!-- <template #modal-footer="{ cancel }">
      <b-button size="md" variant="success" @click="handleOk">
        J'ai compris
      </b-button>
      <b-button
        class="d-none"
        size="md"
        variant="outline-warning"
        @click="cancel()"
      >
        Annuler
      </b-button>
    </template> -->
    <template #modal-footer="{ cancel }">
      <div v-if="run_entity.numbers" class="run-entity">
        <b-alert
          :variant="hasErrorOnprocess ? 'danger' : 'info'"
          fade
          :show="true"
        >
          <strong> {{ run_entity.creates }}</strong> /
          {{ run_entity.numbers }} Contenus mise à jour.
          <div v-if="hasErrorOnprocess"><error-message /></div>
        </b-alert>
      </div>
      <b-button
        :disabled="waiting"
        :class="waiting ? 'save-wait' : ''"
        size="md"
        variant="info"
        @click="handleOk"
      >
        <b-icon icon="save2" variant="white"></b-icon>
        <span> Enregister </span>
        <svgWaiting v-if="waiting"></svgWaiting>
      </b-button>
      <b-button
        :disabled="waiting"
        size="md"
        variant="outline-secondary"
        @click="cancel()"
      >
        Annuler
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import formEdit from "./FormuLaire.vue";
import { mapState } from "vuex";
export default {
  components: {
    formEdit,
    svgWaiting: () => import("./SvgWaiting.vue"),
    "error-message": {
      props: [],
      template: `<div> Une <strong> erreur s'est produite </strong> , nos administrateurs sont  deja notifiées, ils vous contacterons des que c'est corrigé.<br /> Nous nous excusons pour ce désagrément ... </div>`,
      mounted() {
        //
      },
    },
  },
  props: {
    manageModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      waiting: false,
      hasErrorOnprocess: false,
    };
  },
  computed: {
    ...mapState({
      run_entity: (state) => state.run_entity,
    }),
    openModel: {
      get() {
        if (this.manageModal) return true;
        return false;
      },
      set(value) {
        this.$emit("closeModal", value);
      },
    },
  },
  methods: {
    handleOk(event) {
      event.preventDefault();
      // On demarre si et seulement, si on a pas deja demarré.
      if (!this.waiting) {
        this.waiting = true;
        this.hasErrorOnprocess = false;
        this.$refs.formEdit
          .submit()
          .then(() => {
            this.waiting = false;
            this.$bvModal.hide("b-modal-manage-project");
            window.location.assign(window.location.pathname);
          })
          .catch((er) => {
            // On doit afficher sur le modal.
            console.log("error : ", er);
            this.waiting = false;
            this.hasErrorOnprocess = true;
          });
      }
    },
  },
};
</script>
<style lang="scss">
.edit-entity-in-modal {
  min-height: 300px;
  form {
    .form-group {
      legend {
        font-weight: 600;
      }
    }
  }
}
.save-wait {
  position: relative;
  overflow: hidden;
  padding-right: 5rem;
  margin-left: 5rem;
}
.run-entity {
  margin-right: auto;
}
</style>
