var sampleQueries = {
	"example.1" :
	{
  "distinct": true,
  "variables": [
    "?this",
    "?Notaire_1",
    "?Date_3",
    "?Date_4"
  ],
  "defaultLang": "fr",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#provenance",
        "o": "?Notaire_1",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#GroupeDeDocuments",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Notaire_1",
            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#exerceDansQuartierOuVoie",
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
          "children": []
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
          "children": []
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
    "?this",
    "?Cote_3",
    "?Notaire_4"
  ],
  "defaultLang": "fr",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#concerne",
        "o": "?Edifice_1",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Edifice",
        "values": [
          {
            "label": "Louvre (palais du)",
            "uri": "http://data.archives-nationales.culture.gouv.fr/place/FRAN_RI_026-d3nzuks3z7-16gjfic21jid"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#a_une_reproduction",
        "o": "?ReproductionNumerique_2",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ReproductionNumerique",
        "values": []
      },
      "children": [],
      "optional": true,
      "notExists": false
    },
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aPourCote",
        "o": "?Cote_3",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Cote",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#provenance",
        "o": "?Notaire_4",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
        "values": []
      },
      "children": []
    }
  ]
 },
	"example.3" :	{
  "distinct": true,
  "variables": [
    "?this",
    "?Date_2",
    "?ActeNotarie_1",
    "?Cote_3"
  ],
  "defaultLang": "fr",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#estDocFormTypeDe",
        "o": "?ActeNotarie_1",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#DocumentaryFormType",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?ActeNotarie_1",
            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#date",
            "o": "?Date_2",
            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
            "values": [
              {
                "label": "de 01/01/1848 à 31/12/1848",
                "fromDate": "1848-01-01T00:00:00",
                "toDate": "1848-12-31T23:59:59"
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "?ActeNotarie_1",
            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#aPourCote",
            "o": "?Cote_3",
            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#ActeNotarie",
            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Cote",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
},
"example.4" :
{
  "distinct": true,
  "variables": [
    "?this",
    "?Date_2",
    "?Date_3",
    "?Notaire_1"
  ],
  "defaultLang": "fr",
  "order": {
    "expression": "?this",
    "sort": "asc"
  },
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#estQuartierOuVoieOuExerce",
        "o": "?Notaire_1",
        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Voie",
        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Notaire_1",
            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#dateDebutExercice",
            "o": "?Date_2",
            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
            "values": []
          },
          "children": []
        },
        {
          "line": {
            "s": "?Notaire_1",
            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#dateFinExercice",
            "o": "?Date_3",
            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Notaire",
            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
}
};