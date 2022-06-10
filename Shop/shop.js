let items = [
    {
        id: 0,
        name: "PC Portable Gamer - LENOVO Legion 5 15ACH6H - 15,6\"FHD 120Hz - RYZEN 5 5600H - RAM 8Go - 512Go SSD - RTX 3060 6Go - Sans OS - AZERTY",
        price: "899€99",
        quantity: "30",
        img1: "https://www.cdiscount.com/pdt2/q/f/r/1/1200x1200/82ju00fqfr/rw/pc-portable-gamer-lenovo-legion-5-15ach6h-15-6.jpg",
        img2: "https://www.cdiscount.com/pdt2/q/f/r/2/1200x1200/82ju00fqfr/rw/pc-portable-gamer-lenovo-legion-5-15ach6h-15-6.jpg",
    },
    {
        id: 1,
        name: "Ecran PC Gamer Incurvé - MSI Optix MAG321CURV - 32\" 4K - Dalle VA - 4ms - 60Hz - DisplayPort / HDMI / HDMI 2.0 / USB-C",
        price: "463€44",
        quantity: "12",
        img1: "https://www.cdiscount.com/pdt2/6/7/8/2/700x700/msi4719072623678/rw/ecran-pc-gamer-incurve-msi-optix-mag321curv-32.jpg",
        img2: "https://www.cdiscount.com/pdt2/6/7/8/1/1200x1200/msi4719072623678/rw/ecran-pc-gamer-incurve-msi-optix-mag321curv-32.jpg",
    },
    {
        id: 2,
        name: "Fauteuil de Bureau Fauteuil Gaming Chaise Gamer Ergonomique inclinable 135 °, pivotante 360 °, hauteur réglable 116-126cm Rouge",
        price: "113€04",
        quantity: "52",
        img1: "https://www.cdiscount.com/pdt2/7/4/0/1/1200x1200/auc0761989272740/rw/fauteuil-de-bureau-fauteuil-gaming-chaise-gamer-er.jpg",
        img2: "https://www.cdiscount.com/pdt2/7/4/0/4/1200x1200/auc0761989272740/rw/fauteuil-de-bureau-fauteuil-gaming-chaise-gamer-er.jpg",
    },
    {
        id: 3,
        name: "CORSAIR Clavier Gamer Mécanique Compact K65 RGB RAPIDFIRE Cherry MX Speed - AZERTY (CH-9110014-FR)",
        price: "99€99",
        quantity: "24",
        img1: "https://www.cdiscount.com/pdt2/i/r/e/1/700x700/k65rgbrapidfire/rw/corsair-clavier-gamer-mecanique-compact-k65-rgb-ra.jpg",
        img2: "https://www.cdiscount.com/pdt2/i/r/e/2/700x700/k65rgbrapidfire/rw/corsair-clavier-gamer-mecanique-compact-k65-rgb-ra.jpg",
    },
    {
        id: 4,
        name: "CORSAIR Souris Gamer Optique HARPOON RGB PRO FPS/MOBA - Rétroéclairé Backlit RGB LED - 12000 DPI - Noir (CH-9301111-EU)",
        price: "29€99",
        quantity: "20",
        img1: "https://www.cdiscount.com/pdt2/3/2/1/1/700x700/cor0840006606321/rw/corsair-souris-gamer-optique-harpoon-rgb-pro-fps-m.jpg",
        img2: "https://www.cdiscount.com/pdt2/3/2/1/2/700x700/cor0840006606321/rw/corsair-souris-gamer-optique-harpoon-rgb-pro-fps-m.jpg",
    },
    {
        id: 5,
        name: "HyperX Micro-Casque Gamer Cloud II Filaire Rouge Surround 7.1 PS4/Xbox One",
        price: "84€90",
        quantity: "11",
        img1: "https://www.cdiscount.com/pdt2/6/9/2/1/1200x1200/kin0740617235692/rw/hyperx-micro-casque-gamer-cloud-ii-filaire-rouge-s.jpg",
        img2: "https://www.cdiscount.com/pdt2/6/9/2/2/1200x1200/kin0740617235692/rw/hyperx-micro-casque-gamer-cloud-ii-filaire-rouge-s.jpg",
    },
    {
        id: 6,
        name: "ELGATO - Streaming - Facecam - Webcam 1080p60 en Vraie Full HD, Objectif en Verre à Mise au Point Fixe, connecteur USB-C Amovible (1",
        price: "159€99",
        quantity: "3",
        img1: "https://www.cdiscount.com/pdt2/9/0/1/1/700x700/10waa9901/rw/elgato-streaming-facecam-webcam-1080p60-en-v.jpg",
        img2: "https://www.cdiscount.com/pdt2/9/0/1/2/700x700/10waa9901/rw/elgato-streaming-facecam-webcam-1080p60-en-v.jpg",
    },
    {
        id: 7,
        name: "ELGATO - Streaming - Green Screen MT - Fond vert rétractable (10GAO9901)",
        price: "149€99",
        quantity: "2",
        img1: "https://www.cdiscount.com/pdt2/9/0/1/1/700x700/10gao9901/rw/elgato-streaming-green-screen-mt-fond-vert-r.jpg",
        img2: "https://www.cdiscount.com/pdt2/9/0/1/2/700x700/10gao9901/rw/elgato-streaming-green-screen-mt-fond-vert-r.jpg",
    },
    {
        id: 8,
        name: "SAMSUNG MX-T50 Tour de son bidirectionnel - 500W - Connexion Bluetooth mutliples - Fonction Karaoké,DJ - Réhausseur de graves",
        price: "249€99",
        quantity: "41",
        img1: "https://www.cdiscount.com/pdt2/8/5/8/1/700x700/sam8806090257858/rw/samsung-mx-t50-tour-de-son-bidirectionnel-500w.jpg",
        img2: "https://www.cdiscount.com/pdt2/8/5/8/2/700x700/sam8806090257858/rw/samsung-mx-t50-tour-de-son-bidirectionnel-500w.jpg",
    },
]

Show_Items()
Show_Cart()

function Show_Items() {
    let html = ""
    for (let key in items) {
        html += `<div id="item">
                    <div id="item-img">
                    <img id="images" src="${items[key].img1}"  onmouseover="this.src='${items[key].img2}'" onmouseout="this.src='${items[key].img1}'"${items[key].name}">
                    </div>
                    <div id="item_info">
                    <p>${items[key].name}</p>
                    <p>Prix : ${items[key].price}</p>
                    <p>Quantité : ${items[key].quantity}</p>
                    <button id="cart_button" onclick="Add_To_Cart(${items[key].id})">Ajouter au panier</button>
                    </div>
                </div>`
    }
    if (document.getElementById("item_container") != null) {
        document.getElementById("item_container").innerHTML = html
    }
}

function Add_To_Cart(id) {
    let item = items[id]
    let cart = JSON.parse(localStorage.getItem("cart"))
    if (cart == null) {
        cart = {}
    }
    console.log(cart)
    if (cart[id] == null) {
        cart[id] = {
            id: id,
            name: item.name,
            price: item.price,
            quantity: 1,
            img1: item.img1,
            img2: item.img2,
        }
    } else {
        cart[id].quantity += 1
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Produit ajouté au panier")
    Show_Cart()
}

function Show_Cart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || {}
    let html = ""
    let total = 0
    for (let key in cart) {
        console.log(key)
        html += `<div id="cart_item">
                    <div id="cart_item_img">
                    <img id="images" src="${cart[key].img1}"  alt="${cart[key].name}">
                    </div>
                    <div id="cart_item_info">
                    <p>${cart[key].name}</p>
                    <p>Prix : ${cart[key].price}</p>
                    <p>Quantité : ${cart[key].quantity}</p>
                    <button id="cart_button" onclick="Add_One(${key})">+1</button>
                    <button id="cart_button" onclick="Remove_From_Cart(${key})">Supprimer du panier</button>
                    <button id="cart_button" onclick="Remove_One(${key})">-1</button>
                    </div>
                </div>`
        total += cart[key].price * cart[key].quantity
    }
    if (document.getElementById("cart_container") != null) {
        document.getElementById("cart_container").innerHTML = html
    }
}

function Remove_From_Cart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {}
    delete cart[id]
    localStorage.setItem("cart", JSON.stringify(cart))
    Show_Cart()
}

function hide_item() {
    let item = document.getElementById("item_container")
    item.style.display = "none"
    let cart = document.getElementById("cart_container")
    cart.style.display = ""
}

function show_item() {
    let item = document.getElementById("item_container")
    item.style.display = ""
    let cart = document.getElementById("cart_container")
    cart.style.display = "none"
}

function Add_One(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {}
    let item = items[id]
    if (cart[id].quantity < item.quantity) {
        cart[id].quantity += 1
    } else {
        alert("Quantité max atteinte")
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    Show_Cart()
}

function Remove_One(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {}
    cart[id].quantity -= 1
    if (cart[id].quantity <= 0) {
        delete cart[id]
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    Show_Cart()
}