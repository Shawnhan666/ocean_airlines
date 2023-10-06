// OBJECT THAT HOLDS THE PATHS TO THE DIFFERENT AVATARS IN THE PUBLIC FOLDER

// Whether the avatars should be red green blue or pastels
const avatarPath = true ? "rgb" : "pastel";

// The paths
export const avatarPaths = {
    first: {
        red: `/img/avatars/${avatarPath}/shape1_red.png`,
        blue: `/img/avatars/${avatarPath}/shape1_blue.png`,
        green: `/img/avatars/${avatarPath}/shape1_green.png`
    },
    second: {
        red: `/img/avatars/${avatarPath}/shape2_red.png`,
        blue: `/img/avatars/${avatarPath}/shape2_blue.png`,
        green: `/img/avatars/${avatarPath}/shape2_green.png`
    },
    third: {
        red: `/img/avatars/${avatarPath}/shape3_red.png`,
        blue: `/img/avatars/${avatarPath}/shape3_blue.png`,
        green: `/img/avatars/${avatarPath}/shape3_green.png`
    }
};