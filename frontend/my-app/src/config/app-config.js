const DOMAIN = process.env.REACT_APP_DOMAIN;
const config = {
    api_host: "http://"+process.env.REACT_APP_DOMAIN+":34000/",
    pods_info_base: "http://"+process.env.REACT_APP_DOMAIN+":32000/"
}
console.log("Hi i am in config")
console.log(process.env)
export default config;