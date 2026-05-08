import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("./routes/layout/home.tsx", [index("routes/home.tsx")]), 
  layout("./routes/layout/main.tsx", [
    route("about", "routes/about/index.tsx"),
    route("contact", "routes/contact/index.tsx"),
    route("projects", "routes/projects/index.tsx"),
    route("blog", "routes/blog/index.tsx")
  ]),  
] satisfies RouteConfig;
