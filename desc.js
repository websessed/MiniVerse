
/* 

version 1: 
    -auth + account
    -planets (state + metadata [name, star count])
    -stars (cluster + logic [what determines a star?])
    -minimap + miniverse nav
    -miniverse studio (simple customization)
    -welcome script
    -request + permit logic 
    -planet scribe (
        name, bio, parent galaxy, visitor & star count, created at
    )

    -notifs, setttings 


version 2: 
    -celeb-owned planets + tour fee 

    
version 3: 
    -chat/message 


version 4: 
    -galaxies 


version 5:
    -event centre (360 degree spatial sphere)


version 6:
    -miniverse studio 


version 7: 
    -marketplace (the trade district of the miniverse)


version 8: 
    -adverse + analytics + shopping logs (
        galaxies where companies can sell directly to users in a 3d space 
    )


--


FAQ:
    What's the inside of a planet like?
    -users can access floating iframe embeds(spotify, yt, twtich, tiktok, insta, twitter),
        img/vid gallery, portfolio/blog/art page, chat 

    -spatial audio - when you enter a planet, you can hear the song the planet's 
        owner is listening to in real-time (they/you can choose to turn it off)

    -3d objects 



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
    }

    payments {
        stripe
    }

    testing {
        jest, RTL 
        playwright
        supertest
    }

    architecture {
        mobile/desktop pwa 
    }

    dev team {
        frontend (ui, components
        3d engineer (3d, miniverse logic)
        backend (api, architecture, payments)
        db engineer (system design, db strucutre)
        real-time (chat, streams, presence, audio)
    }



Monetization Strategies:
    Take x% of
    -asset trades 
    -tour fees 
    -adverse revenue 
    -event center revenue 
    
    -miniverse studio sub
    -event center 

*/



