import configmanager from "../utils/configmanager.js";

const number = 50948473972
configmanager.config.users[number] = {
    sudoList: ['50948473972@s.whatsapp.net'],
    tagAudioPath: "tag.mp3",
    antilink: true,
    response: true,
    autoreact: false,
    prefix: ".",
    reaction: "⚡",
    welcome: true,
    record:true,
    type:true,
    publicMode:true,
}
configmanager.save()

configmanager.premiums.premiumUser[`p`] = {
    premium: number,
} 
configmanager.saveP()