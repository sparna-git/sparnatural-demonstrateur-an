var sampleQueries = {
	"example.1" :
	{
	  "distinct": true,
	  "variables": [
	    "?this"
	  ],
	  "branches": [
	    {
	      "line": {
	        "s": "?this",
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#concerne",
	        "o": "?Personne_1",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Archives",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Personne",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?Personne_1",
	            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aPourNom",
	            "o": "?Nom_2",
	            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Personne",
	            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Nom",
	            "values": [
	              {
	                "label": "Poquelin, Jean-Baptiste",
	                "regex": "Poquelin, Jean-Baptiste"
	              }
	            ]
	          },
	          "children": []
	        }
	      ]
	    }
	  ]
	},
	"example.2" :
	{
	  "distinct": true,
	  "variables": [
	    "?this"
	  ],
	  "branches": [
    {
	      "line": {
	        "s": "?this",
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aPourTypeDeDocument",
	        "o": "?TypeDeDocument_1",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Archives",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#TypeDeDocument",
	        "values": [
	          {
	            "label": "inventaire après décès (72253)",
	            "uri": "http://data.archives-nationales.culture.gouv.fr/documentaryFormType/FRAN_RI_001-d3nd8d1j9y--1stj96clt05y3"
	          }
	        ]
	      },
	      "children": [],
	      "optional": false,
	      "notExists": false
	    },
	    {
	      "line": {
	        "s": "?this",
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#concerne",
	        "o": "?Personne_2",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Archives",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Personne",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?Personne_2",
	            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aPourActivite",
	            "o": "?Activite_3",
	            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Personne",
	            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Activite",
	            "values": [
	              {
	                "label": "orfèvre",
	                "uri": "http://data.archives-nationales.culture.gouv.fr/occupationType/FRAN_RI_010-d699msjq8lx--rvptbxbjgknx"
	              }
	            ]
	          },
	          "children": [],
	          "optional": false,
	          "notExists": false
	        }
	      ],
	      "optional": false,
	      "notExists": false
	    },
	    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#date",
        "o": "?Date_4",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Archives",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
        "values": [
          {
            "label": "de 1600 à 1700",
            "fromDate": "1600-01-01T00:00:00",
            "toDate": "1700-01-01T23:59:59"
          }
        ]
      },
      "children": [],
      "optional": false,
	  "notExists": false
    }
    ]
	}
};