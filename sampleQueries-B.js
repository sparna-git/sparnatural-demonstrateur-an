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
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aPourProvenance",
	        "o": "?Notaire_1",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#GroupeDeDocuments",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?Notaire_1",
	            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aExerceDansQuartier",
	            "o": "?QuartierOuParoisse_2",
	            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
	            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#QuartierOuParoisse",
	            "values": [
	              {
	                "label": "Saint-Germain-l'Auxerrois (Paris ; paroisse) (8)",
	                "uri": "http://data.archives-nationales.culture.gouv.fr/place/FRAN_RI_024-d3nyvox0hv--s68ql74wtyjp"
	              }
	            ]
	          },
	          "children": [],
	          "optional": false,
	          "notExists": false
	        },
	        {
	          "line": {
	            "s": "?Notaire_1",
	            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#dateDebutExercice",
	            "o": "?Date_3",
	            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
	            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
	            "values": [
	              {
	                "label": "A partir de 1550",
	                "fromDate": "1550-01-01T00:00:00",
	                "toDate": null
	              }
	            ]
	          },
	          "children": [],
	          "optional": false,
	          "notExists": false
	        },
	        {
	          "line": {
	            "s": "?Notaire_1",
	            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#dateFinExercice",
	            "o": "?Date_4",
	            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
	            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
	            "values": [
	              {
	                "label": "Jusqu'à 1700",
	                "fromDate": null,
	                "toDate": "1700-12-31T23:59:59"
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
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#concerne",
	        "o": "?Edifice_1",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Item",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Edifice",
	        "values": [
	          {
	            "label": "Louvre (palais du) (258)",
	            "uri": "http://data.archives-nationales.culture.gouv.fr/place/FRAN_RI_026-d3nzuks3z7-16gjfic21jid"
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
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aCopieNumerique",
	        "o": "?ReproductionNumerique_2",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Item",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ReproductionNumerique",
	        "values": []
	      },
	      "children": [],
	      "optional": false,
	      "notExists": false
	    }
	  ]
	}
};