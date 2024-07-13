
const blogs = [
    {
        title : "Lotus",
        img : "https://www.wallpaperflare.com/static/335/587/630/blooming-lotus-flower-selective-focus-photography-wallpaper.jpg",
        content : "Lotus-- The Aquatic flower blooming most beautifully from the deepest and thick mud. It is a perennially blooming flower with striking symmetry and colours. But, this delicate beauty is much more than just a flower. It is a flower of spirituality and meaning as old as time."  ,
        author : {
            name : "Sakshi Waghmare",
            avatar : "https://tse4.mm.bing.net/th?id=OIP.7j7I4R58monKsKV4sdIqrgAAAA&pid=Api&P=0&h=220"
        },
        date : "23-june-2024",
        categories : ["Lily","Hibiscus","Marigolr"],
    },

    {
        title : "Rose",
        img : "https://tse3.mm.bing.net/th?id=OIP.UAKiww9ztl85UDLQ0apTUgHaE7&pid=Api&P=0&h=220",
        content : "A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon.", 
        author : {
            name : "Achal Chouke",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.CdCBHghVSFo33i1WsW5zXwHaHa&pid=Api&P=0&h=220",
        },
        date : "8-june-2024",
        categories : ["Sunflower","Hibiscus","Lily"],
    },

    {
        title : "Hibiscus",
        img : "https://tse1.mm.bing.net/th?id=OIP.GzJGG2__7xVttVehk0kAjwHaFj&pid=Api&P=0&h=220",
        content : "Hibiscus, (genus Hibiscus), genus of numerous species of herbs, shrubs, and trees in the mallow family (Malvaceae) that are native to warm temperate and tropical regions. Several are cultivated as ornamentals for their showy flowers, and a number are useful as fibre plants.",
        author : {
            name : " Sahil Gupta",
            avatar : "https://tse4.mm.bing.net/th?id=OIP.2b9tJzdxhXaxk5Wn0GOC6wHaJQ&pid=Api&P=0&h=220"
        },
        date : "23-jul-2024",
        categories : ["Lotus","Sunflower","Marigold"],
    },

    {
        title : "Sunflower",
        img : "https://tse2.mm.bing.net/th?id=OIP.2jCSMOC93vj11KVnhodVPwHaEo&pid=Api&P=0&h=220",
        content : "Sunflower (Helianthus annuus) is a herbaceous annual plant belonging to the family Asteraceae. It is native primarily to North America. Some species are cultivated as ornamental plants used in floral decorations, vases, and bouquets, and some are grown for their edible seed and oil.",
        author : {
            name : "Dipali Sharma",
            avatar : "https://tse2.mm.bing.net/th?id=OIP.Z6vsAbyfrRU4Yk_tN2hXVgHaEo&pid=Api&P=0&h=220"
        },
        date : "18-May-2024",
        categories : ["Marigold","Rose","Lotus"],
    },
    {
        title : "Marogold",
        img : "https://tse4.mm.bing.net/th?id=OIP.7Pd5i8_7PFaQL6MseZpmxQHaEo&pid=Api&P=0&h=220",
        content : "Marigold flowers are a great addition to any garden. Use our guides down below to learn how to grow and care for marigolds in your own backyard. You’ll learn about the different kinds of marigolds, using them as companion plants, when they should be planted, what soil is best for them, and what the best growing conditions are.",
        author : {
            name : "Harsh Patil",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.BL0pMq-Nx1qrUc4JU0HQLgAAAA&pid=Api&P=0&h=220 "
        },
        date : "8-jul-2024",
        categories : ["Lotus","Lily","Sunflower"],
    },
    {
        title : "Lily",
        img : "https://tse1.mm.bing.net/th?id=OIP.YDH7xl82e7lcowOd6y52RgHaFj&pid=Api&P=0&h=220",
        content : "The lily is a genus of flowering plant. There are many species of lilies, like trumpet lilies and tiger lilies. They are usually quite tall, and are perennials.Most lilies grow from a bulb, which in some species develops into a rhizome, which carries small bulbs."  ,
        author : {
            name : "Om Sharma",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.dE20_DKOpPXlsOWonKnPxwHaJQ&pid=Api&P=0&h=220"
        },
        date : "3-jul-2024",
        categories : ["Rose","Sunflower","Hibiscus"],
    },
    {
        title : "Dahlia",
        img : "https://images.pexels.com/photos/35646/pexels-photo.jpg?cs=srgb&dl=close-up-dahlia-flower-35646.jpg&fm=jpg",
        content : "Dahlia is a genus of tuberous plants that are members of the Asteraceae family. The tubers are planted in the ground in late spring (around the month of May) and generally flower from July to the first autumn frosts. Dahlias are perfect for a border garden and make lovely cut flowers. Growing vegetables? Put a row of dahlias on the border, where they will not shade your edibles.",
        author : {
            name : " Shivansh Thakur",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.Sv6-7xF6SQU4RFukwmMRNQHaJQ&pid=Api&P=0&h=220"
        },
        date : "23-jul-2024",
        categories : ["Lotus","Sunflower","Marigold"],
    },
    {
        title : "Mogra",
        img : "https://i.ytimg.com/vi/tj0Tw-QCNOg/maxresdefault.jpg",
        content : "Mogra flower is a white-hued bloom having a strong fragrance which is often seen in clusters of three to twelve. Some mogra trees grow as single, double, or completely double blossoms. Mogra plants bloom during the rainy or warm months. However, flushes are also common at other times.These flowers are worn by many Indian women, especially during festivals and celebrations. Mogra is also commonly utilized at weddings and other religious events.Mogra tree has aphrodisiac properties. Its mystery scent acts as a ‘psychic key,’ increasing brain receptivity to energy vibrations, particularly those magnified by sacred mantra chanting.", 
        author : {
            name : "Priyanka Mehta",
            avatar : "https://tse4.explicit.bing.net/th?id=OIP.64X4uhKQt19MoJ2iumM3FgHaJQ&pid=Api&P=0&h=220",
        },
        date : "8-june-2024",
        categories : ["Sunflower","Hibiscus","Lily"],
    }
]



export default blogs 