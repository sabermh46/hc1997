

var body = document.querySelector('body');
body.style.backgroundPositionY = `${ 50 }px`;
window.onscroll = (e)=>{
    var y = this.scrollY;
    console.log(y);
    body.style.backgroundPositionY = `${ 50 - y*0.3 }px`;
}


var langButton = document.querySelector('.nav-bar .container .nav-items .item.lang');
var lan1 = document.querySelector('.lan1');
var lan2 = document.querySelector('.lan2');
var count = 0;

langButton.addEventListener('click', ()=>{
    lan1.classList.toggle('active');
    lan2.classList.toggle('active');
    if(++count%2) {
        langButton.classList.remove('en');
        langButton.classList.add('cn');
        toggleChinese();
    } else {
        langButton.classList.remove('cn');
        langButton.classList.add('en');
        toggleEnglish();
    }
})


var mobileButton = document.querySelector('.mobile-button');
var sideNav = document.querySelector('.nav-bar .container .nav-items');
mobileButton.addEventListener('click', ()=>{
    sideNav.classList.toggle('active');
    mobileButton.classList.toggle('active');
})






var languages = 
    {
        navBar: [
            {
                en: 'Front Page',
                cn: '首页',
                subLinks: 0,
                loc: 'https://google.com/'
            },
            {
                en: 'About Us',
                cn: '关于我们',
                subLinks: [
                    {
                        en: 'Link 1',
                        cn: 'Cn SUB 1',
                        loc: 'https://facebook.com/'
                    },
                    {
                        en: 'Link 2',
                        cn: 'Cn SUB 2',
                        loc: 'https://facebook.com/'
                    },
                    {
                        en: 'Link 3',
                        cn: 'Cn SUB 3',
                        loc: 'https://facebook.com/'
                    }
                ]
            },
            {
                en: 'News',
                cn: '消息',
                subLinks: 0,
                loc: 'https://google.com/'
            },
            {
                en: 'Business Scope',
                cn: '业务范围',
                subLinks: 0,
                loc: 'https://google.com/'
            },
            {
                en: 'Contact Us',
                cn: '联系我们',
                subLinks: 0,
                loc: 'https://google.com/'
            },
        ],
        headText: [
            {
                en: '',
                cn: '',
            }
        ],
        ptext: [
            {
                en: 'Guangdong Hao Chuan Management Service Co., Ltd. was incorporated in Foshan City, Guangdong Province in 2005 with a registered capital of 20 million RMB. The company mainly provides professional financial outsourcing services for major domestic financial institutions. With a good reputation and advantages in the industry, the company has established good cooperative relations with many domestic state-owned banks, joint-stock commercial banks, city commercial banks, rural commercial banks, foreign banks and licensed auto financial institutions. Our company has complete qualifications, and has applied for and passed: ISO9001 quality management system certification, ISO27001 information security management system certification, ISO22301 business continuity management system certification, ISO20000 information technology service management system certification, and obtained the enterprise credit rating The 3A certificate and the CMMI3 software capability maturity model are integrated with the 3-level certificate, which indicates that our company\'s operation system meets the international standard requirements of the industry, and it is also a proof of our company\'s effective guarantee of customer information security. The company\'s business outlets cover the domestic super first-tier and first- and second-tier cities, and its business capabilities radiate to the surrounding areas. The company has established various functional departments with complete functions to provide safe and efficient logistics support for all partners and branches across the country. In response to the needs of business development, our company has successively established 3 wholly-owned subsidiaries: Guangzhou',
            cn: '广东浩传管理服务有限公司于2005年在广东省佛山市注册成立，注册资金贰仟万元人民币。公司主要为国内各大金融机构提供专业的金融外包服务。凭借行业内良好的声誉和优势，公司与国内多家国有银行、股份制商业银行、城市商业银行、农村商业银行、外资银行以及持牌汽车金融机构等建立有良好合作关系\
            我司各项资质齐全, 已申请并通过了包括 ISO9001 质量管理体系认证证,ISO27001信息安全管理体系认证、ISO22301业务连续性管理体系认证、ISO20000信息技术服务管理体系认证，并获得了企业信用等级3A证书和CMMI3软件能力成熟度模型集成3级证书，这标志着我司的运行体系符合行业的国际标准要求，同时也是我司对于客户信息安全有效保障的证明\
            公司营业网点覆盖国内超一线及一、二线城市，业务能力辐射周边。公司设立有功能完善的各类职能部门，为所有合作商及全国各地分公司提供安全高效的后勤保障。应业务发展需要，我司相继成立了3家全资子公司：广州晟捷企业管理服务有限公司、深圳市洪瑞资产管理有限公司以及广州洪硕信息科技有限公司，为公司全面发展提供支持\
            我司行业经验丰富，业绩优良稳定，作业规范，信誉良好。与各大金融机构合作多年，接受各合作方的相关业务培训和指导，对金融外包业务的管理和要求较为熟悉。公司凭借多年的努力和发展，荣幸获得各大合作方的好评和嘉奖，包括多项“年度战略合作伙伴”、“核心战略合作伙伴”、“卓越贡献奖”、“优秀合作机构”、“核心委外机构”等荣誉奖项\
    浩传公司将一如既往地竭诚为各合作方提供优质、安全、高效、规范和稳定的服务，与各合作方携手共创合作共赢的未来!',
            }
        ]
    }

console.log(languages)



var nav_bar = document.querySelectorAll('.nav-items .item:not(.item.lang)');
console.log(nav_bar)

var parallContent = document.querySelector('.parallax-container .content');

function toggleChinese() {
    nav_bar.forEach((link, i)=>{
        link.textContent = languages.navBar[i].cn
        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            var ul = document.createElement('ul')
            for(var i = 0; i<subLinks.length; i++)
            {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = subLinks[i].cn;
                console.log(subLinks[i].cn);
            }
            link.appendChild(ul);
        }
    })
    parallContent.textContent = languages.ptext[0].cn;
}

function toggleEnglish() {
    nav_bar.forEach((link, i)=>{
        link.textContent = languages.navBar[i].en
        var subLinks = languages.navBar[i].subLinks;
        if(subLinks != 0){
            var ul = document.createElement('ul')
            for(var i = 0; i<subLinks.length; i++)
            {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = subLinks[i].en;
                console.log(subLinks[i].en);
            }
            link.appendChild(ul);
        }
    })
    parallContent.textContent = languages.ptext[0].en;
}
toggleEnglish();