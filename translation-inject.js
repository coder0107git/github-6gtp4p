

globalThis["@inject"] = {value:"Hi"}

export default function createPlugin() {
    globalThis["$inject"] = {value:"Hi"}

    return {
        name: "translationInject",
        hooks: {
            "astro:build:start": (...params) => {
                console.log("I'm alive!!!")
                console.log(params);
            },
        }
    };
};
