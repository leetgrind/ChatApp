
const generateAdventurerAvatar = (seed) => `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`

const generatePixelArtAvatar = (seed) => `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`

const generateMicahAvatar = (seed) => `https://api.dicebear.com/9.x/micah/svg?seed=${seed}`


export const GenerateAvatars = () => {

    const avatarList = [];

    for(let i=0; i<2; i++) {
        avatarList.push(generateAdventurerAvatar(Math.random()));
    }

    for(let i=0; i<2; i++) {
        avatarList.push(generatePixelArtAvatar(Math.random()));
    }

    for(let i=0; i<2; i++) {
        avatarList.push(generateMicahAvatar(Math.random()));
    }

    return avatarList;
}