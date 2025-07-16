
/* 

version 1: 
    -user auth + account
    -create planet (bubble) & set state + metadata 
    -planet content 
    -implement stars 
    -dynamic orbit lines 
    -customize planet (drag/drop, buttons)
    -implement visit request + permit 
    -welcome/intro script
    -planet scribe (
        planet age, name, id, links, created at, motto
        star & visit count, galaxy,  )
    -algorithm (similar planets drift closer)
    -spatial nav system (camera orbit, zoom)
    -realtime log (menu[list] of planets & galaxy currently close to you)
    -real-time clock (displays time in users planet)
    -notifications 
    -settings 


version 2: 
    -advanced planet customizer (mods & imports)
    -celeb-owned planets + tour fee 

    
version 3: 
    -planet weather 
    -dream mode (night mode [dream like interactions])


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


version 9: 
    -ai npcs 


version 10: 
    -miniverse studio 
    -customize planet via code


version 11: 
    -adverse + analytics + shopping logs (
        galaxies where companies can sell & advertise in their own planet
    )

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
    -adverse (find your fav ocmpany and shop from there)


Planets: 
    -create (can only create one planet)
    -delete (destroy planet/remove account)
    -planet (called bubble [user world])
    -stars (
        user connect, represented as tiny particles wrapped around user planet 
        [similar concepts to followers]
    )
    -state (idle [no connect], active [open to connect])
    -metadata (dp name, id, state, stars count [on hover])
    -scribe (logs a scroll that displays details about the planet)
    -content (
        social media links, user avatar, music embeds (spotify), readme (about)
        portfolio + blog, art page, img/vid, chat, NFTs 
    )
    -size (determined by number of connect)
    -tour fee - paid by users who visit celeb-owned planets 
    -invites - other users [friends you know] can invite you to their planets 



FAQ:
    What's the inside of a planet like?
    -floating iframes - floating user social media accounts, spotify embed,
        img/vid gallery, access their website (portfolio + blog) or art page 
        without leaving their world, chat terminal, live stream station 

    -spatial audio - when you enter a planet, you can hear the song the planet's 
        owner is listening to in real-time (they can choose to turn it off)

    -3d spots (users can charge for specific spots)
    -3d characters



Sample Tech Stack:  
    frontend {
        threejs, webgl 
        react, zustand 
        tailwind 
    }

    backend {
        postgre, prisma 
        node, epxress
        socket, livekit 
        redis 
        s3, cloudinary
    }

    ai & sync {
        web audio api 
        openai
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

    dev team {
        frontend [3d, miniverse, components]
        backend [database, api, architecture]
        real-time [chat, streams, presence]
        ai [chatbots, openai, custom agents]
        web3 [nft, smart contracts, crypto]
    }



Monetization Strategies:
    Take x% of
    -asset trades 
    -nft trades 
    -ai agent purchases 
    -tour fees 
    -adverse revenue 
    -event center revenue 

    Miniverse studio sub
    -advanced editor tools 
    -scripting libs 
    -ai-assist code gen
    -premium planet mods & themes
    -premium spots 

*/



