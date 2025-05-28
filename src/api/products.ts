// "app/api/page.ts"

import { CardCategory } from "../types/cardCategories";
import { Product } from "../types/product";

import { FaBorderAll } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { RiCellphoneFill } from "react-icons/ri";
import { IoHeadset } from "react-icons/io5";
import { GiBilledCap } from "react-icons/gi";
import { BsFillSpeakerFill } from "react-icons/bs";
import { MdToys } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";

import roupa01 from "../../assets/products/roupas/roupas-01.png";
import roupa02 from "../../assets/products/roupas/roupas-02.png";
import roupa03 from "../../assets/products/roupas/roupas-03.png";
import roupa04 from "../../assets/products/roupas/roupas-04.png";
import roupa05 from "../../assets/products/roupas/roupas-05.png";
import roupa06 from "../../assets/products/roupas/roupas-06.png";

import sapato01 from "../../assets/products/sapatos/sapatos-01.png";
import sapato02 from "../../assets/products/sapatos/sapatos-02.png";
import sapato03 from "../../assets/products/sapatos/sapatos-03.png";
import sapato04 from "../../assets/products/sapatos/sapatos-04.png";
import sapato05 from "../../assets/products/sapatos/sapatos-05.png";
import sapato06 from "../../assets/products/sapatos/sapatos-06.png";

import celular01 from "../../assets/products/celulares/celulares-01.png";
import celular02 from "../../assets/products/celulares/celulares-02.png";
import celular03 from "../../assets/products/celulares/celulares-03.png";
import celular04 from "../../assets/products/celulares/celulares-04.png";
import celular05 from "../../assets/products/celulares/celulares-05.png";
import celular06 from "../../assets/products/celulares/celulares-06.png";

import fone01 from "../../assets/products/fones/fones-01.png";
import fone02 from "../../assets/products/fones/fones-02.png";
import fone03 from "../../assets/products/fones/fones-03.png";
import fone04 from "../../assets/products/fones/fones-04.png";
import fone05 from "../../assets/products/fones/fones-05.png";
import fone06 from "../../assets/products/fones/fones-06.png";

import acessorio01 from "../../assets/products/acessorios/acessorios-01.png";
import acessorio02 from "../../assets/products/acessorios/acessorios-02.png";
import acessorio03 from "../../assets/products/acessorios/acessorios-03.png";
import acessorio04 from "../../assets/products/acessorios/acessorios-04.png";
import acessorio05 from "../../assets/products/acessorios/acessorios-05.png";
import acessorio06 from "../../assets/products/acessorios/acessorios-06.png";

import eletronico01 from "../../assets/products/eletronicos/eletronicos-01.png";
import eletronico02 from "../../assets/products/eletronicos/eletronicos-02.png";
import eletronico03 from "../../assets/products/eletronicos/eletronicos-03.png";
import eletronico04 from "../../assets/products/eletronicos/eletronicos-04.png";
import eletronico05 from "../../assets/products/eletronicos/eletronicos-05.png";
import eletronico06 from "../../assets/products/eletronicos/eletronicos-06.png";

import brinquedo01 from "../../assets/products/brinquedos/brinquedos-01.png";
import brinquedo02 from "../../assets/products/brinquedos/brinquedos-02.png";
import brinquedo03 from "../../assets/products/brinquedos/brinquedos-03.png";
import brinquedo04 from "../../assets/products/brinquedos/brinquedos-04.png";
import brinquedo05 from "../../assets/products/brinquedos/brinquedos-05.png";
import brinquedo06 from "../../assets/products/brinquedos/brinquedos-06.png";

import computador01 from "../../assets/products/computadores/computadores-01.png";
import computador02 from "../../assets/products/computadores/computadores-02.png";
import computador03 from "../../assets/products/computadores/computadores-03.png";
import computador04 from "../../assets/products/computadores/computadores-04.png";
import computador05 from "../../assets/products/computadores/computadores-05.png";
import computador06 from "../../assets/products/computadores/computadores-06.png";

import tablet01 from "../../assets/products/tablets/tablets-01.png";
import tablet02 from "../../assets/products/tablets/tablets-02.png";
import tablet03 from "../../assets/products/tablets/tablets-03.png";
import tablet04 from "../../assets/products/tablets/tablets-04.png";
import tablet05 from "../../assets/products/tablets/tablets-05.png";
import tablet06 from "../../assets/products/tablets/tablets-06.png";

export const CardCategories: CardCategory[] = [
    {
        id: 1,
        title: "Todos",
        icon: FaBorderAll
    },

    {
        id: 2,
        title: "Roupas",
        icon: GiClothes
    },

    {
        id: 3,
        title: "Sapatos",
        icon: GiRunningShoe
    },

    {
        id: 4,
        title: "Celulares",
        icon: RiCellphoneFill
    },

    {
        id: 5,
        title: "Fones",
        icon: IoHeadset
    },

    {
        id: 6,
        title: "Acessórios",
        icon: GiBilledCap
    },

    {
        id: 7,
        title: "Eletrônicos",
        icon: BsFillSpeakerFill
    },

    {
        id: 8,
        title: "Brinquedos",
        icon: MdToys
    },

    {
        id: 9,
        title: "Computadores",
        icon: FaComputer
    },

    {
        id: 10,
        title: "Tablets",
        icon: FaTabletAlt
    },
];

export const CardProducts: Product[] = [
    {
        id: 1,
        title: "Blusa Tricô",
        rating: 4.7,
        priceOld: 129.90,
        discount: 'Desconto 20%',
        mainImage: roupa01,
        images: [
            { src: roupa01, alt: "Blusa Tricô - imagem 1" },
            { src: roupa01, alt: "Blusa Tricô - imagem 2" },
            { src: roupa01, alt: "Blusa Tricô - imagem 3" },
        ],
        price: 103.92,
        category: "Roupas"
    },

    {
        id: 2,
        title: "Calça Jeans",
        rating: 4.6,
        priceOld: 199.90,
        discount: 'Desconto 25%',
        mainImage: roupa02,
        images: [
            { src: roupa02, alt: "Calça Jeans - imagem 1" },
            { src: roupa02, alt: "Calça Jeans - imagem 2" },
            { src: roupa02, alt: "Calça Jeans - imagem 3" },
        ],
        price: 149.92,
        category: "Roupas"
    },

    {
        id: 3,
        title: "Camiseta",
        rating: 4.5,
        priceOld: 89.90,
        discount: 'Desconto 15%',
        mainImage: roupa03,
        images: [
            { src: roupa03, alt: "Camiseta - imagem 1" },
            { src: roupa03, alt: "Camiseta - imagem 2" },
            { src: roupa03, alt: "Camiseta - imagem 3" },
        ],
        price: 76.42,
        category: "Roupas"
    },

    {
        id: 4,
        title: "Vestido",
        rating: 4.8,
        priceOld: 189.90,
        discount: 'Desconto 18%',
        mainImage: roupa04,
        images: [
            { src: roupa04, alt: "Vestido - imagem 1" },
            { src: roupa04, alt: "Vestido - imagem 2" },
            { src: roupa04, alt: "Vestido- imagem 3" },
        ],
        price: 155.72,
        category: "Roupas"
    },

    {
        id: 5,
        title: "Jaqueta Moletom",
        rating: 4.9,
        priceOld: 249.90,
        discount: 'Desconto 30%',
        mainImage: roupa05,
        images: [
            { src: roupa05, alt: "Jaqueta Moletom - imagem 1" },
            { src: roupa05, alt: "Jaqueta Moletom - imagem 2" },
            { src: roupa05, alt: "Jaqueta Moletom - imagem 3" },
        ],
        price: 174.93,
        category: "Roupas"
    },

    {
        id: 6,
        title: "Bermuda Jeans",
        rating: 4.4,
        priceOld: 119.90,
        discount: 'Desconto 20%',
        mainImage: roupa06,
        images: [
            { src: roupa06, alt: "Bermuda Jeans - imagem 1" },
            { src: roupa06, alt: "Bermuda Jeans - imagem 2" },
            { src: roupa06, alt: "Bermuda Jeans - imagem 3" },
        ],
        price: 95.92,
        category: "Roupas"
    },

    {
        id: 7,
        title: "Sapato Marrom",
        rating: 4.6,
        priceOld: 249.90,
        discount: 'Desconto 25%',
        mainImage: sapato01,
        images: [
            { src: sapato01, alt: "Sapato Marrom - imagem 1" },
            { src: sapato01, alt: "Sapato Marrom - imagem 2" },
            { src: sapato01, alt: "Sapato Marrom - imagem 3" },
        ],
        price: 187.42,
        category: "Sapatos"
    },

    {
        id: 8,
        title: "Sapato Bicudo",
        rating: 4.3,
        priceOld: 199.90,
        discount: 'Desconto 22%',
        mainImage: sapato02,
        images: [
            { src: sapato02, alt: "Sapato Bicudo - imagem 1" },
            { src: sapato02, alt: "Sapato Bicudo - imagem 2" },
            { src: sapato02, alt: "Sapato Bicudo - imagem 3" },
        ],
        price: 155.92,
        category: "Sapatos"
    },

    {
        id: 9,
        title: "Tênis Marrom",
        rating: 4.7,
        priceOld: 299.90,
        discount: 'Desconto 30%',
        mainImage: sapato03,
        images: [
            { src: sapato03, alt: "Tênis Marrom - imagem 1" },
            { src: sapato03, alt: "Tênis Marrom - imagem 2" },
            { src: sapato03, alt: "Tênis Marrom - imagem 3" },
        ],
        price: 209.93,
        category: "Sapatos"
    },

    {
        id: 10,
        title: "Tênis Bota",
        rating: 4.8,
        priceOld: 349.90,
        discount: 'Desconto 25%',
        mainImage: sapato04,
        images: [
            { src: sapato04, alt: "Tênis Bota - imagem 1" },
            { src: sapato04, alt: "Tênis Bota - imagem 2" },
            { src: sapato04, alt: "Tênis Bota - imagem 3" },
        ],
        price: 262.42,
        category: "Sapatos"
    },

    {
        id: 11,
        title: "Tamanco Vermelho",
        rating: 4.5,
        priceOld: 129.90,
        discount: 'Desconto 20%',
        mainImage: sapato05,
        images: [
            { src: sapato05, alt: "Tamanco Vermelho - imagem 1" },
            { src: sapato05, alt: "Tamanco Vermelho - imagem 2" },
            { src: sapato05, alt: "Tamanco Vermelho - imagem 3" },
        ],
        price: 103.92,
        category: "Sapatos"
    },

    {
        id: 12,
        title: "Sapato",
        rating: 4.5,
        priceOld: 129.90,
        discount: 'Desconto 20%',
        mainImage: sapato06,
        images: [
            { src: sapato06, alt: "Sapato - imagem 1" },
            { src: sapato06, alt: "Sapato - imagem 2" },
            { src: sapato06, alt: "Sapato - imagem 3" },
        ],
        price: 103.92,
        category: "Sapatos"
    },

    {
        id: 13,
        title: "Celular",
        rating: 4.5,
        priceOld: 1399.90,
        discount: 'Desconto 20%',
        mainImage: celular01,
        images: [
            { src: celular01, alt: "Celular - imagem 1" },
            { src: celular01, alt: "Celular - imagem 2" },
            { src: celular01, alt: "Celular - imagem 3" },
        ],
        price: 1299.90,
        category: "Celulares"
    },

    {
        id: 14,
        title: "Celular",
        rating: 4.5,
        priceOld: 1399.90,
        discount: 'Desconto 20%',
        mainImage: celular02,
        images: [
            { src: celular02, alt: "Celular - imagem 1" },
            { src: celular02, alt: "Celular - imagem 2" },
            { src: celular02, alt: "Celular - imagem 3" },
        ],
        price: 1299.90,
        category: "Celulares"
    },

    {
        id: 15,
        title: "Celular",
        rating: 4.5,
        priceOld: 1399.90,
        discount: 'Desconto 20%',
        mainImage: celular03,
        images: [
            { src: celular03, alt: "Celular - imagem 1" },
            { src: celular03, alt: "Celular - imagem 2" },
            { src: celular03, alt: "Celular - imagem 3" },
        ],
        price: 1299.90,
        category: "Celulares"
    },

    {
        id: 16,
        title: "Celular",
        rating: 4.5,
        priceOld: 1399.90,
        discount: 'Desconto 20%',
        mainImage: celular04,
        images: [
            { src: celular04, alt: "Celular - imagem 1" },
            { src: celular04, alt: "Celular - imagem 2" },
            { src: celular04, alt: "Celular - imagem 3" },
        ],
        price: 1299.90,
        category: "Celulares"
    },

    {
        id: 17,
        title: "Celular",
        rating: 4.5,
        priceOld: 1399.90,
        discount: 'Desconto 20%',
        mainImage: celular05,
        images: [
            { src: celular05, alt: "Celular - imagem 1" },
            { src: celular05, alt: "Celular - imagem 2" },
            { src: celular05, alt: "Celular - imagem 3" },
        ],
        price: 1299.90,
        category: "Celulares"
    },

    {
        id: 18,
        title: "Celular",
        rating: 4.5,
        priceOld: 1399.90,
        discount: 'Desconto 20%',
        mainImage: celular06,
        images: [
            { src: celular06, alt: "Celular - imagem 1" },
            { src: celular06, alt: "Celular - imagem 2" },
            { src: celular06, alt: "Celular - imagem 3" },
        ],
        price: 1299.90,
        category: "Celulares"
    },

    {
        id: 19,
        title: "Fone de Ouvido",
        rating: 4.4,
        priceOld: 199.90,
        discount: 'Desconto 25%',
        mainImage: fone01,
        images: [
            { src: fone01, alt: "Fone de Ouvido - imagem 1" },
            { src: fone01, alt: "Fone de Ouvido - imagem 2" },
            { src: fone01, alt: "Fone de Ouvido - imagem 3" },
        ],
        price: 149.92,
        category: "Fones"
    },

    {
        id: 20,
        title: "Fone de Ouvido Bluetooth",
        rating: 4.7,
        priceOld: 299.90,
        discount: 'Desconto 30%',
        mainImage: fone02,
        images: [
            { src: fone02, alt: "Fone de Ouvido - imagem 1" },
            { src: fone02, alt: "Fone de Ouvido - imagem 2" },
            { src: fone02, alt: "Fone de Ouvido - imagem 3" },
        ],
        price: 209.93,
        category: "Fones"
    },

       {
        id: 21,
        title: "Fone de Ouvido",
        rating: 4.5,
        priceOld: 299.00,
        discount: 'Desconto 60%',
        mainImage: fone03,
        images: [
            { src: fone03, alt: "Fone de Ouvido - imagem 1" },
            { src: fone03, alt: "Fone de Ouvido - imagem 2" },
            { src: fone03, alt: "Fone de Ouvido - imagem 3" },
        ],
        price: 119.90,
        category: "Fones"
    },
    
    {
        id: 22,
        title: "Fone de Ouvido",
        rating: 4.2,
        priceOld: 199.00,
        discount: 'Desconto 50%',
        mainImage: fone04,
        images: [
            { src: fone04, alt: "Fone de Ouvido - imagem 1" },
            { src: fone04, alt: "Fone de Ouvido - imagem 2" },
            { src: fone04, alt: "Fone de Ouvido - imagem 3" },
        ],
        price: 99.90,
        category: "Fones"
    },
    
    {
        id: 23,
        title: "Fone de Ouvido",
        rating: 4.3,
        priceOld: 399.00,
        discount: 'Desconto 45%',
        mainImage: fone05,
        images: [
            { src: fone05, alt: "Fone de Ouvido - imagem 1" },
            { src: fone05, alt: "Fone de Ouvido - imagem 2" },
            { src: fone05, alt: "Fone de Ouvido - imagem 3" },
        ],
        price: 219.90,
        category: "Fones"
    },
    
    {
        id: 24,
        title: "Fone de Ouvido",
        rating: 4.4,
        priceOld: 399.00,
        discount: 'Desconto 48%',
        mainImage: fone06,
        images: [
            { src: fone06, alt: "Fone de Ouvido - imagem 1" },
            { src: fone06, alt: "Fone de Ouvido - imagem 2" },
            { src: fone06, alt: "Fone de Ouvido - imagem 3" },
        ],
        price: 209.99,
        category: "Fones"
    },

    {
        id: 25,
        title: "Bolsa",
        rating: 4.0,
        priceOld: 199.00,
        discount: 'Desconto 20%',
        mainImage: acessorio01,
        images: [
            { src: acessorio01, alt: "Bolsa - imagem 1" },
            { src: acessorio01, alt: "Bolsa - imagem 2" },
            { src: acessorio01, alt: "Bolsa - imagem 3" },
        ],
        price: 159.00,
        category: "Acessórios"
    },

    {
        id: 26,
        title: "Bolsa de Couro",
        rating: 4.7,
        priceOld: 350.00,
        discount: 'Desconto 25%',
        mainImage: acessorio02,
        images: [
            { src: acessorio02, alt: "Bolsa de Couro - imagem 1" },
            { src: acessorio02, alt: "Bolsa de Couro - imagem 2" },
            { src: acessorio02, alt: "Bolsa de Couro - imagem 3" },
        ],
        price: 262.50,
        category: "Acessórios"
    },

    {
        id: 27,
        title: "Relógio",
        rating: 4.2,
        priceOld: 180.00,
        discount: 'Desconto 30%',
        mainImage: acessorio03,
        images: [
            { src: acessorio03, alt: "Relógio - imagem 1" },
            { src: acessorio03, alt: "Relógio - imagem 2" },
            { src: acessorio03, alt: "Relógio - imagem 3" },
        ],
        price: 126.00,
        category: "Acessórios"
    },

    {
        id: 28,
        title: "Anel",
        rating: 4.6,
        priceOld: 80.00,
        discount: 'Desconto 50%',
        mainImage: acessorio04,
        images: [
            { src: acessorio04, alt: "Anel - imagem 1" },
            { src: acessorio04, alt: "Anel - imagem 2" },
            { src: acessorio04, alt: "Anel - imagem 3" },
        ],
        price: 40.00,
        category: "Acessórios"
    },

    {
        id: 29,
        title: "Colar",
        rating: 4.3,
        priceOld: 120.00,
        discount: 'Desconto 35%',
        mainImage: acessorio05,
        images: [
            { src: acessorio05, alt: "Colar - imagem 1" },
            { src: acessorio05, alt: "Colar - imagem 2" },
            { src: acessorio05, alt: "Colar - imagem 3" },
        ],
        price: 78.00,
        category: "Acessórios"
    },

    {
        id: 30,
        title: "Pulseira",
        rating: 4.1,
        priceOld: 70.00,
        discount: 'Desconto 10%',
        mainImage: acessorio06,
        images: [
            { src: acessorio06, alt: "Pulseira - imagem 1" },
            { src: acessorio06, alt: "Pulseira - imagem 2" },
            { src: acessorio06, alt: "Pulseira - imagem 3" },
        ],
        price: 63.00,
        category: "Acessórios"
    },

    {
        id: 31,
        title: "Pendrive",
        rating: 4.4,
        priceOld: 70.00,
        discount: 'Desconto 20%',
        mainImage: eletronico01,
        images: [
            { src: eletronico01, alt: "Pendrive - imagem 1" },
            { src: eletronico01, alt: "Pendrive - imagem 2" },
            { src: eletronico01, alt: "Pendrive - imagem 3" },
        ],
        price: 56.00,
        category: "Eletrônicos"
    },

    {
        id: 32,
        title: "Termômetro",
        rating: 4.3,
        priceOld: 100.00,
        discount: 'Desconto 25%',
        mainImage: eletronico02,
        images: [
            { src: eletronico02, alt: "Termômetro - imagem 1" },
            { src: eletronico02, alt: "Termômetro - imagem 2" },
            { src: eletronico02, alt: "Termômetro - imagem 3" },
        ],
        price: 75.00,
        category: "Eletrônicos"
    },

    {
        id: 33,
        title: "Memória RAM",
        rating: 4.6,
        priceOld: 250.00,
        discount: 'Desconto 20%',
        mainImage: eletronico03,
        images: [
            { src: eletronico03, alt: "Memória RAM - imagem 1" },
            { src: eletronico03, alt: "Memória RAM - imagem 2" },
            { src: eletronico03, alt: "Memória RAM - imagem 3" },
        ],
        price: 200.00,
        category: "Eletrônicos"
    },

    {
        id: 34,
        title: "Cabo USB",
        rating: 4.0,
        priceOld: 30.00,
        discount: 'Desconto 50%',
        mainImage: eletronico04,
        images: [
            { src: eletronico04, alt: "Cabo USB - imagem 1" },
            { src: eletronico04, alt: "Cabo USB - imagem 2" },
            { src: eletronico04, alt: "Cabo USB - imagem 3" },
        ],
        price: 15.00,
        category: "Eletrônicos"
    },

    {
        id: 35,
        title: "Arduino",
        rating: 4.8,
        priceOld: 150.00,
        discount: 'Desconto 15%',
        mainImage: eletronico05,
        images: [
            { src: eletronico05, alt: "Arduino - imagem 1" },
            { src: eletronico05, alt: "Arduino - imagem 2" },
            { src: eletronico05, alt: "Arduino - imagem 3" },
        ],
        price: 127.50,
        category: "Eletrônicos"
    },

    {
        id: 36,
        title: "Cabo RS 232",
        rating: 4.2,
        priceOld: 55.00,
        discount: 'Desconto 18%',
        mainImage: eletronico06,
        images: [
            { src: eletronico06, alt: "Cabo RS 232 - imagem 1" },
            { src: eletronico06, alt: "Cabo RS 232 - imagem 2" },
            { src: eletronico06, alt: "Cabo RS 232 - imagem 3" },
        ],
        price: 45.00,
        category: "Eletrônicos"
    },

    {
        id: 37,
        title: "Blocos de Montar",
        rating: 4.8,
        priceOld: 89.90,
        discount: "Desconto 10%",
        mainImage: brinquedo01,
        images: [
            { src: brinquedo01, alt: "Blocos de Montar - imagem 1" },
            { src: brinquedo01, alt: "Blocos de Montar - imagem 2" },
            { src: brinquedo01, alt: "Blocos de Montar - imagem 3" },
        ],
        price: 69.90,
        category: "Brinquedos"
    },

    {
        id: 38,
        title: "Cubo Mágico",
        rating: 4.6,
        priceOld: 45.00,
        discount: "Desconto 15%",
        mainImage: brinquedo02,
        images: [
            { src: brinquedo02, alt: "Cubo Mágico - imagem 1" },
            { src: brinquedo02, alt: "Cubo Mágico - imagem 2" },
            { src: brinquedo02, alt: "Cubo Mágico - imagem 3" },
        ],
        price: 38.00,
        category: "Brinquedos"
    },

    {
        id: 39,
        title: "Blocos Alfabeto",
        rating: 4.7,
        priceOld: 59.90,
        discount: "Desconto 20%",
        mainImage: brinquedo03,
        images: [
            { src: brinquedo03, alt: "Blocos Alfabeto - imagem 1" },
            { src: brinquedo03, alt: "Blocos Alfabeto - imagem 2" },
            { src: brinquedo03, alt: "Blocos Alfabeto - imagem 3" },
        ],
        price: 47.90,
        category: "Brinquedos"
    },

    {
        id: 40,
        title: "Ursinho de Pelúcia",
        rating: 4.9,
        priceOld: 99.90,
        discount: "Desconto 10%",
        mainImage: brinquedo04,
        images: [
            { src: brinquedo04, alt: "Ursinho de Pelúcia - imagem 1" },
            { src: brinquedo04, alt: "Ursinho de Pelúcia - imagem 2" },
            { src: brinquedo04, alt: "Ursinho de Pelúcia - imagem 3" },
        ],
        price: 89.90,
        category: "Brinquedos"
    },

    {
        id: 41,
        title: "Ioiô",
        rating: 4.3,
        priceOld: 25.00,
        discount: "Desconto 12%",
        mainImage: brinquedo05,
        images: [
            { src: brinquedo05, alt: "Ioiô - imagem 1" },
            { src: brinquedo05, alt: "Ioiô - imagem 2" },
            { src: brinquedo05, alt: "Ioiô - imagem 3" },
        ],
        price: 21.90,
        category: "Brinquedos"
    },

    {
        id: 42,
        title: "Avião de Brinquedo",
        rating: 4.7,
        priceOld: 85.00,
        discount: "Desconto 15%",
        mainImage: brinquedo06,
        images: [
            { src: brinquedo06, alt: "Avião de Brinquedo - imagem 1" },
            { src: brinquedo06, alt: "Avião de Brinquedo - imagem 2" },
            { src: brinquedo06, alt: "Avião de Brinquedo - imagem 3" },
        ],
        price: 72.00,
        category: "Brinquedos"
    },

    {
        id: 43,
        title: "Monitor",
        rating: 4.5,
        priceOld: 899.00,
        discount: "Desconto 20%",
        mainImage: computador01,
        images: [
            { src: computador01, alt: "Monitor - imagem 1" },
            { src: computador01, alt: "Monitor - imagem 2" },
            { src: computador01, alt: "Monitor - imagem 3" },
        ],
        price: 719.00,
        category: "Computadores"
    },

    {
        id: 44,
        title: "Notebook",
        rating: 4.6,
        priceOld: 2499.00,
        discount: "Desconto 15%",
        mainImage: computador02,
        images: [
            { src: computador02, alt: "Notebook - imagem 1" },
            { src: computador02, alt: "Notebook - imagem 2" },
            { src: computador02, alt: "Notebook - imagem 3" },
        ],
        price: 2129.00,
        category: "Computadores"
    },

    {
        id: 45,
        title: "Notebook",
        rating: 4.5,
        priceOld: 1599.00,
        discount: "Desconto 18%",
        mainImage: computador03,
        images: [
            { src: computador03, alt: "Notebook - imagem 1" },
            { src: computador03, alt: "Notebook - imagem 2" },
            { src: computador03, alt: "Notebook - imagem 3" },
        ],
        price: 1319.00,
        category: "Computadores"
    },

    {
        id: 46,
        title: "Monitor",
        rating: 4.3,
        priceOld: 699.90,
        discount: "Desconto 12%",
        mainImage: computador04,
        images: [
            { src: computador04, alt: "Monitor - imagem 1" },
            { src: computador04, alt: "Monitor - imagem 2" },
            { src: computador04, alt: "Monitor - imagem 3" },
        ],
        price: 615.00,
        category: "Computadores"
    },

    {
        id: 47,
        title: "Notebook",
        rating: 4.6,
        priceOld: 1999.00,
        discount: "Desconto 14%",
        mainImage: computador05,
        images: [
            { src: computador05, alt: "Notebook - imagem 1" },
            { src: computador05, alt: "Notebook - imagem 2" },
            { src: computador05, alt: "Notebook - imagem 3" },
        ],
        price: 1719.00,
        category: "Computadores"
    },

    {
        id: 48,
        title: "Computador",
        rating: 4.4,
        priceOld: 1999.00,
        discount: "Desconto 10%",
        mainImage: computador06,
        images: [
            { src: computador06, alt: "Computador - imagem 1" },
            { src: computador06, alt: "Computador - imagem 2" },
            { src: computador06, alt: "Computador - imagem 3" },
        ],
        price: 1799.00,
        category: "Computadores"
    },

    {
        id: 49,
        title: "Tablet",
        rating: 4.7,
        priceOld: 799.00,
        discount: "Desconto 13%",
        mainImage: tablet01,
        images: [
            { src: tablet01, alt: "Tablet - imagem 1" },
            { src: tablet01, alt: "Tablet - imagem 2" },
            { src: tablet01, alt: "Tablet - imagem 3" },
        ],
        price: 699.00,
        category: "Tablets"
    },

    {
        id: 50,
        title: "Tablet",
        rating: 4.6,
        priceOld: 649.00,
        discount: "Desconto 15%",
        mainImage: tablet02,
        images: [
            { src: tablet02, alt: "Tablet - imagem 1" },
            { src: tablet02, alt: "Tablet - imagem 2" },
            { src: tablet02, alt: "Tablet - imagem 3" },
        ],
        price: 549.90,
        category: "Tablets"
    },

    {
        id: 51,
        title: "Tablet",
        rating: 4.8,
        priceOld: 599.00,
        discount: "Desconto 10%",
        mainImage: tablet03,
        images: [
            { src: tablet03, alt: "Tablet - imagem 1" },
            { src: tablet03, alt: "Tablet - imagem 2" },
            { src: tablet03, alt: "Tablet - imagem 3" },
        ],
        price: 536.00,
        category: "Tablets"
    },

    {
        id: 52,
        title: "Tablet",
        rating: 4.4,
        priceOld: 699.00,
        discount: "Desconto 15%",
        mainImage: tablet04,
        images: [
            { src: tablet04, alt: "Tablet - imagem 1" },
            { src: tablet04, alt: "Tablet - imagem 2" },
            { src: tablet04, alt: "Tablet - imagem 3" },
        ],
        price: 599.00,
        category: "Tablets"
    },

    {
        id: 53,
        title: "Tablet",
        rating: 4.9,
        priceOld: 1099.00,
        discount: "Desconto 5%",
        mainImage: tablet05,
        images: [
            { src: tablet05, alt: "Tablet - imagem 1" },
            { src: tablet05, alt: "Tablet - imagem 2" },
            { src: tablet05, alt: "Tablet - imagem 3" },
        ],
        price: 999.90,
        category: "Tablets"
    },

    {
        id: 54,
        title: "Tablet",
        rating: 4.6,
        priceOld: 599.00,
        discount: "Desconto 8%",
        mainImage: tablet06,
        images: [
            { src: tablet06, alt: "Tablet - imagem 1" },
            { src: tablet06, alt: "Tablet - imagem 2" },
            { src: tablet06, alt: "Tablet - imagem 3" },
        ],
        price: 490.00,
        category: "Tablets"
    }      
];
