<template>
  <div>
    <modalForm
      :title-modal="titleModal"
      :manage-modal="manageModal"
      @closeModal="closeModal"
    >
      <template #header>
        <HCardIcon :with-mb="false">
          <template #titre>
            <span> Modifier le contenu </span>
          </template>
          <template #default>
            <span> Veillez remplir les champs ci-dessous et enregistrer </span>
            <br />
            <span>
              En cas de probleme ou d'incomprehension , veillez nous
              <a href="#"> laisser un message </a>
            </span>
          </template>
        </HCardIcon>
      </template>
    </modalForm>
  </div>
</template>

<script>
import modalForm from "./ModalForm.vue";
import { mapState } from "vuex";
export default {
  name: "EditEntity",
  components: {
    modalForm,
  },
  data() {
    return {
      titleModal: "",
      manageModal: false,
    };
  },
  computed: {
    ...mapState({
      currentEntityInfo: (state) => state.currentEntityInfo,
    }),
  },
  mounted() {
    this.check_edit_entity();
  },
  methods: {
    check_edit_entity() {
      document.addEventListener(
        "formatage_models_data_quick_edit_vuejs",
        (even) => {
          if (even.detail && even.detail.id) {
            // On verifie s'il faut netoyer les données.
            if (
              this.currentEntityInfo.id &&
              even.detail.id != this.currentEntityInfo.id
            ) {
              console.log(" check_edit_entity Nettoyage ");
              this.$store.dispatch("cleanDatas").then(() => {
                this.initEdit(even);
              });
            } else {
              console.log(" check_edit_entity faux ");
              this.initEdit(even);
            }
          }
        },
        false
      );
    },
    initEdit(even) {
      console.log("initEdit : ", even.detail);
      this.openModal();
      this.$store.dispatch("set_currentEntityForm", even.detail).then(() => {
        this.$store.dispatch("loadForm");
      });
    },
    openModal() {
      if (this.manageModal) this.manageModal = false;
      else this.manageModal = true;
    },
    closeModal() {
      this.manageModal = false;
    },
  },
};
</script>
