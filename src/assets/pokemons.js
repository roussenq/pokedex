const DATA = [
    {
      "id": 1,
      "image": "https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png",
      "name": {
        "english": "Bulbasaur",
        "japanese": "フシギダネ",
        "chinese": "妙蛙种子",
        "french": "Bulbizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 2,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      "name": {
        "english": "Ivysaur",
        "japanese": "フシギソウ",
        "chinese": "妙蛙草",
        "french": "Herbizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 63,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 60
      }
    },
    {
      "id": 3,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      "name": {
        "english": "Venusaur",
        "japanese": "フシギバナ",
        "chinese": "妙蛙花",
        "french": "Florizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 83,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 80
      }
    },
    {
      "id": 4,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      "name": {
        "english": "Charmander",
        "japanese": "ヒトカゲ",
        "chinese": "小火龙",
        "french": "Salamèche"
      },
      "type": [
        "Fire"
      ],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 5,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      "name": {
        "english": "Charmeleon",
        "japanese": "リザード",
        "chinese": "火恐龙",
        "french": "Reptincel"
      },
      "type": [
        "Fire"
      ],
      "base": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 80
      }
    },
    {
      "id": 6,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      "name": {
        "english": "Charizard",
        "japanese": "リザードン",
        "chinese": "喷火龙",
        "french": "Dracaufeu"
      },
      "type": [
        "Fire",
        "Flying"
      ],
      "base": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        "Speed": 100
      }
    },
    {
      "id": 7,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      "name": {
        "english": "Squirtle",
        "japanese": "ゼニガメ",
        "chinese": "杰尼龟",
        "french": "Carapuce"
      },
      "type": [
        "Water"
      ],
      "base": {
        "HP": 44,
        "Attack": 48,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 64,
        "Speed": 43
      }
    },
    {
      "id": 8,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      "name": {
        "english": "Wartortle",
        "japanese": "カメール",
        "chinese": "卡咪龟",
        "french": "Carabaffe"
      },
      "type": [
        "Water"
      ],
      "base": {
        "HP": 59,
        "Attack": 63,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 80,
        "Speed": 58
      }
    },
    {
      "id": 9,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      "name": {
        "english": "Blastoise",
        "japanese": "カメックス",
        "chinese": "水箭龟",
        "french": "Tortank"
      },
      "type": [
        "Water"
      ],
      "base": {
        "HP": 79,
        "Attack": 83,
        "Defense": 100,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        "Speed": 78
      }
    },
    {
      "id": 10,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      "name": {
        "english": "Caterpie",
        "japanese": "キャタピー",
        "chinese": "绿毛虫",
        "french": "Chenipan"
      },
      "type": [
        "Bug"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        "Speed": 45
      }
    },
    {
      "id": 11,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      "name": {
        "english": "Metapod",
        "japanese": "トランセル",
        "chinese": "铁甲蛹",
        "french": "Chrysacier"
      },
      "type": [
        "Bug"
      ],
      "base": {
        "HP": 50,
        "Attack": 20,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 30
      }
    },
    {
      "id": 12,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
      "name": {
        "english": "Butterfree",
        "japanese": "バタフリー",
        "chinese": "巴大蝶",
        "french": "Papilusion"
      },
      "type": [
        "Bug",
        "Flying"
      ],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 50,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        "Speed": 70
      }
    },
    {
      "id": 13,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
      "name": {
        "english": "Weedle",
        "japanese": "ビードル",
        "chinese": "独角虫",
        "french": "Aspicot"
      },
      "type": [
        "Bug",
        "Poison"
      ],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        "Speed": 50
      }
    },
    {
      "id": 14,
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      "name": {
        "english": "Kakuna",
        "japanese": "コクーン",
        "chinese": "铁壳蛹",
        "french": "Coconfort"
      },
      "type": [
        "Bug",
        "Poison"
      ],
      "base": {
        "HP": 45,
        "Attack": 25,
        "Defense": 50,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 35
      }
    },
  ]
  
  export default DATA