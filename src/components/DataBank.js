import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import Logo from "../assets/logo.png";
import HeroImage from "../assets/lion-coin.png";
import CommunityImage from "../assets/community-lion.png";
import parse from "html-react-parser";
import MrRastaImage from "../assets/lion-mr-rasta.jpg";
import MrsRastaImage from "../assets/lion-mrs-rasta.jpg";
import BinanceLogo from "../assets/Binance-Icon-Logo.svg";
import AboutHeader from "../assets/aboutHero.jpg";
import BurdyProfile from "../assets/senor-burdy.png";
import EvoProfile from "../assets/senor-evo.png";
import BinanceWallet from "../assets/wallet/binance-wallet.png";
import MathWallet from "../assets/wallet/math-wallet.png";
import MetaMask from "../assets/wallet/meta-mask.png";
import TokenPocket from "../assets/wallet/token-pocket.png";
import TrustWallet from "../assets/wallet/trust-wallet.png";
import WalletConnect from "../assets/wallet/wallet-connect.png";

export default {
  wallet : [
    {
      name:"Metamask",
      icon:<MetaMask/>,
      link:"#"
    },
    {
      name:"TrustWallet",
      icon:<TrustWallet/>,
      link:"#"
    },
    {
      name:"MathWallet",
      icon:<MathWallet/>,
      link:"#"
    },
    {
      name:"TokenPocket",
      icon:<TokenPocket/>,
      link:"#"
    },
    {
      name:"WalletConnect",
      icon:<WalletConnect/>,
      link:"#"
    },
    {
      name:"Binance Chain",
      icon:<BinanceWallet/>,
      link:"#"
    },
  ],
  navbar: {
    logo: Logo,
    menu: [
      {
        label: "Home",
        path: "/",
        icon: <FaIcons.FaHome className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "About",
        path: "/about",
        icon: <RiIcons.RiErrorWarningFill className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Trade",
        path: "/trade",
        icon: <IoIcons.IoIosSwap className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Rasino",
        path: "#",
        icon: <AiIcons.AiFillDollarCircle className="inline-block" />,
        parent: true,
        child: [],
      },
      {
        label: "Farms",
        path: "#",
        icon: <RiIcons.RiCoinLine className="inline-block" />,
        parent: true,
        child: [
          {
            path: "/farms/mr-rasta",
            label: "Mr. Rasta",
          },
          {
            path: "/farms/mrs-rasta",
            label: "Mrs. Rasta",
          },
        ],
      },
      {
        label: "Pools",
        path: "#",
        icon: <GiIcons.GiTwoCoins className="inline-block" />,
        parent: true,
        child: [
          {
            path: "#",
            label: "Mr. Rasta",
          },
          {
            path: "#",
            label: "Mrs. Rasta",
          },
        ],
      },
      {
        label: "Top Launch Pad",
        path: "#",
        icon: <AiIcons.AiFillStar className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Community",
        path: "#",
        icon: <Io5Icons.IoChatboxEllipsesOutline className="inline-block" />,
        parent: true,
        child: [
          {
            path: "#",
            label: "Telegram",
          },
          {
            path: "#",
            label: "Coin Market Cap",
          },
          {
            path: "#",
            label: "Whitepaper",
          },
          {
            path: "#",
            label: "Medium",
          },
          {
            path: "#",
            label: "Dapp Radar",
          },
          {
            path: "#",
            label: "Chart",
          },
        ],
      },
      {
        label: "Contact",
        path: "/contact/",
        icon: <FaIcons.FaPhone className="inline-block transform rotate-90" />,
        parent: false,
        child: [],
      },
    ],
    myProfileMenu: [],
  },
  homepage: {
    path: "/",
    heroSection: {
      image: HeroImage,
      title: parse(
        "<span class='text-yellow-rasta'>Pride and Joy</span><br> of the Binance Smart Chain"
      ),
      desc: parse(`Join thousands of Rastas on a journey to ZION. RastaFinance is decentralizing finance, 
      using the latest in blockchain technology. Seize the power of your own money, 
      join the revolution.`),
      counter: [
        { label: "Counter", numbers: "3256" },
        { label: "Holders", numbers: "56879" },
        { label: "Transfers", numbers: "$235.008+" },
        { label: "Continents", numbers: "6" },
      ],
    },
    community: {
      image: CommunityImage,
      title: "Join The Community That Cares",
      desc: parse(`Built by the very same people that <br>
make up this loving community. <br>
Powered by the People!`),
    },
    favCreator: {
      title: parse(`Interact with Your Favorite Creators.<br>
      <span class="text-yellow-rasta">Completely Decentralized.</span>`),
    },
  },
  farms: {
    child: {
      mr_rasta: {
        name: "mr-rasta",
        page: {
          header_img: MrRastaImage,
          title: "Mr. Rasta Farms",
          subtitle: parse("Stake Liquidity Pool Tokens"),
          desc: parse("Earn Brand New Rasta Tokens"),
          card: {
            pages: 3,
            content: [
              {
                name: "M - RASTA 1",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "/",
                  unlockWalletLink: "/",
                  stake: "Total Liquidity",
                  value: "47,581",
                  bscLink: "/",
                },
              },
              {
                name: "M - RASTA 2",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 3",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 4",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 5",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
            ],
          },
        },
      },

      mrs_rasta: {
        name: "mr-rasta",
        page: {
          header_img: MrsRastaImage,
          title: "Mrs. Rasta Farms",
          subtitle: parse("Stake Liquidity Pool Tokens"),
          desc: parse("Earn Brand New Rasta Tokens"),
          card: {
            pages: 3,
            content: [
              {
                name: "M - RASTA 1",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "/",
                  unlockWalletLink: "/",
                  stake: "Total Liquidity",
                  value: "47,581",
                  bscLink: "/",
                },
              },
              {
                name: "M - RASTA 2",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 3",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 4",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 5",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
              {
                name: "M - RASTA 6",
                detail: {
                  core: "Core",
                  multiple: "35x",
                  wallet: BinanceLogo,
                  apr: "256.08",
                  depositFee: "0",
                  rastaEarned: "0",
                  harvesLink: "",
                  unlockWalletLink: "",
                  stake: "Total Liquidity",
                  value: "47,581",
                },
              },
            ],
          },
        },
      },
    },
  },
  about: {
    heroSection: {
      image: AboutHeader,
      title: parse("About Us"),
      desc: "We are a big team with an even bigger heart.",
      button: {
        link: "#",
        label: "Read The Docs",
      },
    },
    cardSection: [
      {
        icon: <AiIcons.AiFillQuestionCircle />,
        title: "What’s Rasta?",
        desc: `The precious $RASTA token is the official Token of the RastaFinance eco-system. 
      Through its decentralized exchange (DEX) and architecture, RastaFinance is putting the people's money, back into the people's hands `,
      },
      {
        icon: <FaIcons.FaLink />,
        title: "Connect Directly to Your Wallet",
        desc: `The Rasta.Finance platform connects straight to your smart chain wallet, 
      in order to ensure swift interaction with our DeFi protocols. Please find the guide on connecting your Binance Smart Chain (BSC) enabled wallet. `,
      },
      {
        icon: <FaIcons.FaUsers />,
        title: "Join a Community that Cares",
        desc: `Farming the $RASTA token involves staking your coins to provide liquidity for the 
      RastaDEX. By a whole community doing this together, we grow the community and make it easier for new Rastas to join`,
      },
    ],
    descSection:
      parse(`<p>What started as a dream, has caught on fire and spread without control. The vision of RastaFinance can no longer be caged, 
    it has been decentralized and distributed to all corners of the world.</p>
    <p>We value transparency, love, compassion and camaraderie above all else. We stand strong as ONE, as we are determined to re-gain
     the power of our own money, taking it back from the institutions and exploiters that have kept us apart.</p>
    
    <p>So connect your browser-based wallet, and join the Decentralized REVOLUTION!</p>`),
    cardBtnItem: [
      { label: parse("Rasta<br>Token"), link: "#" },
      { label: parse("MRasta<br>Token"), link: "#" },
      { label: parse("Factory<br>Address"), link: "#" },
      { label: parse("Router<br>Address"), link: "#" },
      { label: parse("Bouyancy<br>Fund Address"), link: "#" },
      { label: parse("Rasta <br>Trust Fund <br>Address"), link: "#" },
    ],
    team:[
      {
        name:parse('@SeñorBurdy'),
        position:parse('Founder & CEO'),
        avatar: <BurdyProfile/>
      },
      {
        name:parse('@SeñorEVO'),
        position:parse('RastaOperations'),
        avatar: <EvoProfile/>
      },
      {
        name:parse('@typhoncrypto'),
        position:parse('RastaDevelopment'),
        avatar: <EvoProfile/>
      },
    ],
    letsConnect : {
      heading:'Rasta.Finance',
      subHeading: parse('Let\'s connect and get <br>to know each other'),
      listContent : ['Decentralized','Community Driven','For The People.','By The People.'],
      textContent : `Best way to get in touch with us is to join the Telegram community, our admins are from all over the world and we are ready to answer any questions you may have.`,
      link: {
        btn: {
          joinNowLink : '#',
          farmRastaLink : '#',
        },
        social: [
        {
          icon: <FaIcons.FaTwitter/>,
          link:'#'
        },
        {
          icon: <FaIcons.FaTelegramPlane/>,
          link:'#'
        },
        {
          icon: <Io5Icons.IoLogoTiktok/>,
          link:'#'
        },
        {
          icon: <FaIcons.FaMediumM/>,
          link:'#'
        },
      ]
      }
    },
    },
    trades: {
      heading: {
        title:'Swap and Exchange',
      },
      content: {
        title:'Stake Liquidity Pool Tokens',
        subTitle: 'Earn Brand New Rasta Tokens'
      }
    },
    contact:{
      heading:{
        title:'Contact Us',
        desc: parse(`Feel free to contact us any time<br>Let’s make some magic together!`)
      },
      forms:{
        fields: [
          {
          name:'name',
          type:'text',
          placeholder:'Name'
        },
        {
        name:'email',
        type:'email',
        placeholder:'Email'
      },
      {
      name:'message',
      type:'textarea',
      placeholder:'Message'
    },
      ],
      },
      contactInfo: {
        title: 'Contact Info',
        detail : [{
          icon:<IoIcons.IoIosPhonePortrait/>,
          text:'00-0000-000',
          link:'tel:00-0000-000'
        },
        {
          icon:<FaIcons.FaRegEnvelope/>,
          text:'loremipsum@rasta.finance',
          link:'mailto:loremipsum@rasta.finance'
        }
      ],

      socialMedia : [
        {
          icon: <FaIcons.FaTwitter/>,
          link:'#'
        },
        {
          icon: <FaIcons.FaTelegramPlane/>,
          link:'#'
        },
        {
          icon: <Io5Icons.IoLogoTiktok/>,
          link:'#'
        },
        {
          icon: <FaIcons.FaMediumM/>,
          link:'#'
        },
      ]
      },
      
    },
    
  footer: {
    logo: Logo,
    textUnderLogo: ["@rastafinance", "www.rasta.finance"],
    navigation: [
      {
        title: "Useful Links",
        item: [
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
          { label: "Farms", path: "#" },
        ],
      },
      {
        title: "Farms",
        item: [
          { label: "Mr. Rasta", path: "/farms/mr-rasta" },
          { label: "Mrs. Rasta", path: "/farms/mrs-rasta" },
        ],
      },
    ],
    copyRight: parse(
      '<a href="#" class="text-yellow-rasta">Rasta Finance</a> 2021 // All Right Reserved'
    ),
  },
  socialMedia: [
    { name: "Twitter", icon: <FaIcons.FaTwitter />, link: "#" },
    { name: "Tik Tok", icon: <Io5Icons.IoLogoTiktok />, link: "#" },
    { name: "Instagram", icon: <FaIcons.FaInstagram />, link: "#" },
    { name: "Telegram", icon: <FaIcons.FaTelegramPlane />, link: "#" },
    { name: "Reddit", icon: <FaIcons.FaReddit />, link: "#" },
    { name: "Medium", icon: <FaIcons.FaMediumM />, link: "#" },
    { name: "Youtube", icon: <FaIcons.FaYoutube />, link: "#" },
  ],
};
