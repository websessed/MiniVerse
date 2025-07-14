
/* 

version 1: 
    -user auth + account
    -create planet (bubble) & set state + metadata 
    -planet content 
    -implement stars 
    -customize planet (drag/drop, buttons)
    -implement visit request + permit 
    -welcome/intro script
    -algorithm (similar planets drift closer)
    -spatial nav system (camera fly, zoom)
    -notifications 
    -settings 


version 2: 
    -advanced planet customizer (via code, mods)
    -celeb-owned planets + tour fee 

    
version 3: 
    -dynamic lighting based on time of day 
    -real-time clock (displays time in users planet)


version 4: 
    -map + minimap navigation 
    -galaxies 


version 5: 
    -live streams + chat 


version 6: 
    -marketplace (NFT support included)


version 7: 
    -cryptocurrency support in marketplace 


version 8: 
    -real-time 3d characters 
    -build mode (add/import 3d spots to your bubble)


--


The MiniVerse:
    -shared 3d space where all planets exists & orbit 
    -galaxies (called communities)
    -real-time interaction, zoom, navigation 
    -marketplace (trade assets with other planets)
    -users can: 
        visit other planet (stay duration determined by the planet's owner)
        customize planets manually or via code 
        trade assets 
        fly between galaxies 
        host streams within their planet 
    

Galaxies: 
    -communities (users can explore other galaxies based on preference)
    -event center (anybody can visit [game jams, concerts, sports etc])


Planets: 
    -create (can only create one planet)
    -delete (destroy planet/remove account)
    -planet (called bubble [user world])
    -stars (
        user connect, represented as tiny particles wrapped around user planet 
        [similar concepts to followers]
    )
    -state (idle [no connect], active [open to connect])
    -metadata (dp name, id, state, stars count)
    -content (
        social media links, user avatar, music embeds (spotify), readme (about)
        portfolio + blog, art page, img/vid, chat, NFTs 
    )
    -size (determined by number of connect)
    -tour fee - paid by users who visit celeb-owned planets 



FAQ:
    What's the inside of a planet like?
    -floating iframes - floating user social media accounts, spotify embed,
        img/vid gallery, access their website (portfolio + blog) or art page 
        without leaving their world, chat terminal, live stream station 

    -3d spots (users can charge for specific spots)
    -3d character



Sample Tech Stack:  
    frontend {
        threejs, webgl 
        react, electron
        tailwind 
    }

    backend {
        postgre, prisma 
        node, epxress
        socket, webrtc 
        redis 
        s3, cloudinary
    }

    ai & sync {
        web audio api 
        openai
        convex 
    }

    web3 layer {
        etherjs, metamask 
        solidity
        ipfs 
    }

    payments {
        stripe, crypto 
    }

    testing {
        jest, RTL 
        playwright
        supertest
        hardhat 
        three-mock
    }

    architecture {
        mobile/desktop pwa 
    }

*/