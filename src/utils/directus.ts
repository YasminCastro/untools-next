import { Directus } from "@directus/sdk";
import { CMS_URL, CMS_EMAIL, CMS_PASSWORD } from "../config";

const DirectusInstance = (function () {
  let instance: any;

  async function createInstance() {
    const directus = new Directus(CMS_URL);

    await directus.auth.login({
      email: CMS_EMAIL,
      password: CMS_PASSWORD,
    });

    instance = directus;

    return directus;
  }

  return {
    getInstance: async function () {
      if (!instance) {
        instance = createInstance();
      }

      return createInstance();
    },
  };
})();

export default DirectusInstance;
