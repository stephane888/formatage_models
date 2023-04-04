<template>
  <div>
    <h2>Ckeditor</h2>
    <!--
    <textArea
      namespace-store=""
      :field="field"
      :model="model_custom"
    ></textArea>
-->
    <component
      :is="render.template"
      v-for="(render, k) in buildFields()"
      :key="k"
      :field="render.field"
      :model="render.model"
      :class-css="['mb-5']"
      namespace-store=""
      @addNewValue="addNewValue($event, render)"
      @removeField="removeField($event, render)"
      @array_move="array_move($event, render)"
    ></component>
  </div>
</template>

<script>
import request from "@/request";
import loadField from "components_h_vuejs/src/components/fieldsDrupal/loadField";
export default {
  name: "TestCkeditor",
  components: {
    // textArea: () => {
    //   return import(
    //     "components_h_vuejs/src/components/fieldsDrupal/TextareaCkeditor.vue"
    //   );
    // },
  },
  data() {
    return {
      field: {
        name: "description",
        label: " Description ",
        description: null,
        cardinality: 1,
        type: "text_textarea",
        weight: 1,
        region: "content",
        settings: {
          rows: 5,
          placeholder: "",
        },
        third_party_settings: [],
        definition_settings: [],
        constraints: [],
      },
      model_custom: {
        id: [],
        uuid: [
          {
            value: "84c4e462-8ab0-4e9a-be9b-5bb56c11af22",
          },
        ],
        vid: [],
        langcode: [
          {
            value: "fr",
          },
        ],
        type: [
          {
            target_id: "creation_des_sites__2022_11_739",
          },
        ],
        revision_created: [
          {
            value: 1671939657,
          },
        ],
        revision_user: [],
        revision_log: [
          {
            value: "",
          },
        ],
        status: [
          {
            value: true,
          },
        ],
        user_id: [
          {
            target_id: "1",
          },
        ],
        name: [
          {
            value: "",
          },
        ],
        type_project: [],
        private: [
          {
            value: false,
          },
        ],
        status_execution: [],
        duree: [],
        executants: [],
        primes: [],
        client: [],
        project_manager: [],
        description: [],
        description_cancel: [],
        created: [
          {
            value: 1671939657,
          },
        ],
        changed: [
          {
            value: 1671939657,
          },
        ],
        revision_translation_affected: [],
        default_langcode: [
          {
            value: true,
          },
        ],
        revision_default: [],
      },
      form: {
        field_description_1: {
          name: "field_description_1",
          label: "description 1",
          description: "",
          cardinality: 1,
          type: "text_textarea",
          weight: 11,
          region: "content",
          settings: {
            rows: 5,
            placeholder: "",
          },
          third_party_settings: [],
          definition_settings: [],
          constraints: [],
        },
        field_domain_access: {
          name: "field_domain_access",
          label: " Domain access ",
          description: null,
          cardinality: -1,
          type: "select2_entity_reference",
          weight: 0,
          region: "content",
          settings: {
            width: "100%",
            autocomplete: false,
            match_operator: "CONTAINS",
            match_limit: 10,
          },
          third_party_settings: [],
          definition_settings: {
            target_type: "domain",
            handler: "default",
            handler_settings: [],
          },
          constraints: [],
        },
        field_domain_source: {
          name: "field_domain_source",
          label: " Domain source ",
          description: null,
          cardinality: 1,
          type: "select2_entity_reference",
          weight: 0,
          region: "content",
          settings: {
            width: "100%",
            autocomplete: false,
            match_operator: "CONTAINS",
            match_limit: 10,
          },
          third_party_settings: [],
          definition_settings: {
            target_type: "domain",
            handler: "default",
            handler_settings: [],
          },
          constraints: [],
        },
        field_liste_de_logos: {
          name: "field_liste_de_logos",
          label: "Liste de logos",
          description: "",
          cardinality: -1,
          type: "creationsitevirtuelcomplexinline",
          weight: 12,
          region: "content",
          settings: {
            form_mode: "default",
            label_singular: "",
            label_plural: "",
            collapsible: "1",
            collapsed: "1",
            allow_new: "1",
            allow_existing: "1",
            match_operator: "CONTAINS",
            allow_duplicate: "1",
            revision: 0,
            override_labels: 0,
          },
          third_party_settings: [],
          definition_settings: {
            handler: "default:block_content",
            handler_settings: {
              target_bundles: {
                logos_clients: "logos_clients",
              },
              sort: {
                field: "_none",
                direction: "ASC",
              },
              auto_create: true,
              auto_create_bundle: "",
            },
            target_type: "block_content",
          },
          constraints: [],
        },
        field_titre_1: {
          name: "field_titre_1",
          label: "titre 1",
          description: "",
          cardinality: 1,
          type: "string_textfield",
          weight: 1,
          region: "content",
          settings: {
            size: 60,
            placeholder: "",
          },
          third_party_settings: [],
          definition_settings: {
            max_length: 255,
            case_sensitive: false,
            is_ascii: false,
          },
          constraints: [],
        },
      },
      form_sort: [
        {
          name: "field_domain_access",
          label: " Domain access ",
          description: null,
          cardinality: -1,
          type: "select2_entity_reference",
          weight: 0,
          region: "content",
          settings: {
            width: "100%",
            autocomplete: false,
            match_operator: "CONTAINS",
            match_limit: 10,
          },
          third_party_settings: [],
          definition_settings: {
            target_type: "domain",
            handler: "default",
            handler_settings: [],
          },
          constraints: [],
        },
        {
          name: "field_domain_source",
          label: " Domain source ",
          description: null,
          cardinality: 1,
          type: "select2_entity_reference",
          weight: 0,
          region: "content",
          settings: {
            width: "100%",
            autocomplete: false,
            match_operator: "CONTAINS",
            match_limit: 10,
          },
          third_party_settings: [],
          definition_settings: {
            target_type: "domain",
            handler: "default",
            handler_settings: [],
          },
          constraints: [],
        },
        {
          name: "field_titre_1",
          label: "titre 1",
          description: "",
          cardinality: 1,
          type: "string_textfield",
          weight: 1,
          region: "content",
          settings: {
            size: 60,
            placeholder: "",
          },
          third_party_settings: [],
          definition_settings: {
            max_length: 255,
            case_sensitive: false,
            is_ascii: false,
          },
          constraints: [],
        },
        {
          name: "field_description_1",
          label: "description 1",
          description: "",
          cardinality: 1,
          type: "text_textarea",
          weight: 11,
          region: "content",
          settings: {
            rows: 5,
            placeholder: "",
          },
          third_party_settings: [],
          definition_settings: [],
          constraints: [],
        },
        {
          name: "field_liste_de_logos",
          label: "Liste de logos",
          description: "",
          cardinality: -1,
          type: "creationsitevirtuelcomplexinline",
          weight: 12,
          region: "content",
          settings: {
            form_mode: "default",
            label_singular: "",
            label_plural: "",
            collapsible: "1",
            collapsed: "1",
            allow_new: "1",
            allow_existing: "1",
            match_operator: "CONTAINS",
            allow_duplicate: "1",
            revision: 0,
            override_labels: 0,
          },
          third_party_settings: [],
          definition_settings: {
            handler: "default:block_content",
            handler_settings: {
              target_bundles: {
                logos_clients: "logos_clients",
              },
              sort: {
                field: "_none",
                direction: "ASC",
              },
              auto_create: true,
              auto_create_bundle: "",
            },
            target_type: "block_content",
          },
          constraints: [],
        },
      ],
      model: {
        id: [
          {
            value: "5",
          },
        ],
        uuid: [
          {
            value: "74c0ac06-ad10-4a9a-b711-2a5e003dc20c",
          },
        ],
        revision_id: [
          {
            value: "5",
          },
        ],
        langcode: [
          {
            value: "fr",
          },
        ],
        type: [
          {
            target_id: "rc_web_nos_clients_logos",
          },
        ],
        status: [
          {
            value: "1",
          },
        ],
        created: [
          {
            value: "1653745711",
          },
        ],
        parent_id: [],
        parent_type: [],
        parent_field_name: [],
        behavior_settings: [
          {
            value: "a:0:{}",
          },
        ],
        default_langcode: [
          {
            value: "1",
          },
        ],
        revision_default: [
          {
            value: "1",
          },
        ],
        revision_translation_affected: [
          {
            value: "1",
          },
        ],
        field_domain_access: [
          {
            target_id: "wb_horizon_kksa",
          },
        ],
        field_domain_source: [],
        content_translation_source: [
          {
            value: "und",
          },
        ],
        content_translation_outdated: [
          {
            value: "0",
          },
        ],
        content_translation_changed: [
          {
            value: "1653748169",
          },
        ],
        field_description_1: [
          {
            value:
              "<p>ILS NOUS FONT CONFIANCE &amp; VOUS DEVRIEZ LE FAIRE AUSSI !</p>\r\n",
            format: "full_html",
          },
        ],
        field_liste_de_logos: [
          {
            target_id: "11",
          },
          {
            target_id: "12",
          },
          {
            target_id: "13",
          },
          {
            target_id: "14",
          },
          {
            target_id: "15",
          },
          {
            target_id: "16",
          },
        ],
        field_titre_1: [
          {
            value: "NOS CLIENTS SONT GÉNIAUX",
          },
        ],
        layout_builder__layout: [],
      },
    };
  },
  methods: {
    buildFields() {
      const fields = [];
      loadField.setConfig(request);
      if (this.form_sort)
        this.form_sort.forEach((field) => {
          fields.push({
            template: loadField.getField(field),
            field: field,
            model: this.model,
          });
        });
      return fields;
    },
  },
};
</script>
