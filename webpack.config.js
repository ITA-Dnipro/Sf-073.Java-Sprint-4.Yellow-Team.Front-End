import { resolve, join } from "path"

export const entry = "./app/Main.js"
export const output = {
  publicPath: "/",
  path: resolve(__dirname, "app"),
  filename: "bundled.js"
}
export const mode = "development"
export const devtool = "source-map"
export const devServer = {
  port: 3000,
  static: {
    directory: join(__dirname, "app")
  },
  hot: true,
  liveReload: false,
  historyApiFallback: { index: "index.html" }
}
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
        }
      }
    }
  ]
}
