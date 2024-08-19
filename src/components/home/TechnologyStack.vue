<template>
  <div class="mt-16 md:mt-0 py-16 px-8 md:px-16">
    <div class="w-fit m-auto pb-10">
      <h1 class="text-xl md:text-2xl font-bold text-center">
        Technology Stack
      </h1>
      <div class="h-1 w-full rounded-full bg-red-500 mt-1 mb-2"></div>
    </div>
    <div class="inline-grid md:grid-cols-2 gap-16 h-fit">
      <div
        v-for="(items, category) in technologies"
        :key="category"
        class="p-auto"
      >
        <div class="flex flex-row justify-start items-center my-4 gap-2">
          <div class="h-5 w-2 bg-red-500"></div>
          <h2 class="font-bold text-sm md:text-lg">
            {{ formatCategory(category) }}
          </h2>
        </div>
        <div class="uppercase flex gap-4 flex-wrap">
          <TechnologyItem
            v-for="item in items"
            :key="item.id"
            :src="item.icon"
            :label="item.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyItem from "./TechnologyItem.vue";
import java from "../../assets/tech_icon/java.png";
import javascript from "../../assets/tech_icon/javascript.png";
import kotlin from "../../assets/tech_icon/kotlin.png";
import typescript from "../../assets/tech_icon/typescript.png";
import solidity from "../../assets/tech_icon/solidity.png";
import python from "../../assets/tech_icon/python.png";
import swift from "../../assets/tech_icon/swift.png";
import vLang from "../../assets/tech_icon/v-lang.png";
import cPlus from "../../assets/tech_icon/cplus.png";
import cSharp from "../../assets/tech_icon/cSharp.png";
import go from "../../assets/tech_icon/go.png";
import mojo from "../../assets/tech_icon/mojo.png";
import aws from "../../assets/tech_icon/aws.png";
import gcp from "../../assets/tech_icon/gcp.png";
import postgresql from "../../assets/tech_icon/postgresql.png";
import mysql from "../../assets/tech_icon/mysql.png";
import azure from "../../assets/tech_icon/azure.png";
import oracle from "../../assets/tech_icon/oracle.png";
import voltdb from "../../assets/tech_icon/voltdb.png";
import greenplum from "../../assets/tech_icon/greenplum.png";
import netezza from "../../assets/tech_icon/netezza.png";
import reactjs from "../../assets/tech_icon/reactjs.png";
import vuejs from "../../assets/tech_icon/vuejs.png";
import angular from "../../assets/tech_icon/angular.png";
import nextjs from "../../assets/tech_icon/nextjs.png";
import figma from "../../assets/tech_icon/figma.png";
import reactNative from "../../assets/tech_icon/reactNative.png";
import flutter from "../../assets/tech_icon/flutter.png";
import unrealEngine from "../../assets/tech_icon/unrealEngine.png";
import unity from "../../assets/tech_icon/unity.png";
import github from "../../assets/tech_icon/github.png";
import slack from "../../assets/tech_icon/slack.png";
import gsuite from "../../assets/tech_icon/gsuite.png";
import ble from "../../assets/tech_icon/ble.png";

export default {
  name: "TechnologyStack",
  components: {
    TechnologyItem,
  },
  data() {
    return {
      technologies: {
        ProgrammingLanguages: [
          {
            id: "java",
            name: "Java",
            icon: java,
          },
          {
            id: "javascript",
            name: "Javascript",
            icon: javascript,
          },
          {
            id: "kotlin",
            name: "Kotlin",
            icon: kotlin,
          },
          {
            id: "typescript",
            name: "Typescript",
            icon: typescript,
          },
          {
            id: "solidity",
            name: "Solidity",
            icon: solidity,
          },
          {
            id: "python",
            name: "Python",
            icon: python,
          },
          {
            id: "swift",
            name: "Swift",
            icon: swift,
          },
          {
            id: "v-lang",
            name: "v-lang",
            icon: vLang,
          },
          {
            id: "c_plus",
            name: "C++",
            icon: cPlus,
          },
          { id: "c#", name: "C#", icon: cSharp },
          {
            id: "go-lang",
            name: "Go-lang",
            icon: go,
          },
          {
            id: "mojo",
            name: "Mojo",
            icon: mojo,
          },
          {
            id: "javascript",
            name: "Javascript",
            icon: javascript,
          },
          {
            id: "kotlin",
            name: "Kotlin",
            icon: kotlin,
          },
          {
            id: "typescript",
            name: "Typescript",
            icon: typescript,
          },
          {
            id: "solidity",
            name: "Solidity",
            icon: solidity,
          },
          {
            id: "python",
            name: "Python",
            icon: python,
          },
          {
            id: "swift",
            name: "Swift",
            icon: swift,
          },
          {
            id: "v-lang",
            name: "v-lang",
            icon: vLang,
          },
          {
            id: "c_plus",
            name: "C++",
            icon: cPlus,
          },
          { id: "c#", name: "C#", icon: cSharp },
          {
            id: "go-lang",
            name: "Go-lang",
            icon: go,
          },
          {
            id: "mojo",
            name: "Mojo",
            icon: mojo,
          },
        ],
        CloudServicesAndDatabase: [
          { id: "aws", name: "AWS", icon: aws },
          { id: "gcp", name: "GCP", icon: gcp },
          {
            id: "postgresql",
            name: "PostgreSQL",
            icon: postgresql,
          },
          {
            id: "mysql",
            name: "MySQL",
            icon: mysql,
          },
          {
            id: "azure",
            name: "Azure",
            icon: azure,
          },
          {
            id: "oracle",
            name: "Oracle",
            icon: oracle,
          },
          {
            id: "voltdb",
            name: "VoltDB",
            icon: voltdb,
          },
          {
            id: "greenplum",
            name: "Greenplum",
            icon: greenplum,
          },
          {
            id: "netezza",
            name: "Netezza",
            icon: netezza,
          },
        ],
        FrontendFrameworks: [
          {
            id: "reactjs",
            name: "ReactJS",
            icon: reactjs,
          },
          {
            id: "VueJS",
            name: "VueJS",
            icon: vuejs,
          },
          {
            id: "angular",
            name: "Angular",
            icon: angular,
          },
          {
            id: "nextjs",
            name: "NextJS",
            icon: nextjs,
          },
          {
            id: "figma",
            name: "Figma",
            icon: figma,
          },
        ],
        MobileAndGameDevelopmentFrameworks: [
          {
            id: "reactNative",
            name: "React Native",
            icon: reactNative,
          },
          {
            id: "flutter",
            name: "Flutter",
            icon: flutter,
          },
          {
            id: "unrealEngine",
            name: "Unreal Engine",
            icon: unrealEngine,
          },
          {
            id: "unity",
            name: "Unity",
            icon: unity,
          },
        ],

        CollaborationTools: [
          {
            id: "github",
            name: "GitHub",
            icon: github,
          },
          {
            id: "slack",
            name: "Slack",
            icon: slack,
          },
          {
            id: "g-suite",
            name: "G Suite",
            icon: gsuite,
          },
        ],
        Other: [{ id: "ble", name: "BLE", icon: ble }],
      },
    };
  },
  methods: {
    formatCategory(category) {
      return category.replace(/([A-Z])/g, " $1").trim();
    },
  },
};
</script>

<style scoped>
/* You can include your CSS here if needed */
</style>
