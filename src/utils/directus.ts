import { Directus } from "@directus/sdk";
import { CMS_URL, CMS_EMAIL, CMS_PASSWORD } from "../config";

const DirectusInstance = async () => {
  const directus = new Directus(CMS_URL);

  await directus.auth.login({
    email: CMS_EMAIL,
    password: CMS_PASSWORD,
  });

  return directus;
};

export default DirectusInstance;
