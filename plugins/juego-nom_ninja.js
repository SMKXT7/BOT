function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(`
☯️ Nombre ninja para _${text}_ es: *`+teks.replace(/[a-z]/gi,i=>({a:"ka",b:"tu",c:"mi",d:"te",e:"ku",f:"lu",g:"ji",h:"ri",i:"ki",j:"zu",k:"me",l:"ta",m:"rin",n:"to",o:"mo",p:"no",q:"ke",r:"shi",s:"ari",t:"ci",u:"do",v:"ru",w:"mei",x:"na",y:"fu",z:"zi"})[i.toLowerCase()]||i)+"*\n");
}

handler.help = ['nombreninja <nombre>']
handler.tags = ['games']
handler.command =  /^(nombreninja)$/i

export default handler