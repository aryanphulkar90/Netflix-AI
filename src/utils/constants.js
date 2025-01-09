export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"

export const API_OPTIONS = {
    method: "GET",
    headers: {
        'Authorization': "Bearer " + process.env.REACT_APP_TMDB_KEY,
        'accept': 'application/json'
    }
}

export const IMG_CDN = "https://image.tmdb.org/t/p/original"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"

export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"}
]

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY