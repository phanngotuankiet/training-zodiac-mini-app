type Post = {
  title: string;
  slug: string;
  feature_image: string;
};

const GHOST_ENDPOINT = import.meta.env.VITE_GHOST_CMS_API;
const GHOST_KEY = import.meta.env.VITE_GHOST_CMS_KEY;

export {
    Post,
    GHOST_ENDPOINT,
    GHOST_KEY
}