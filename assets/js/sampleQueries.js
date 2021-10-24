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
	        "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#provenance",
	        "o": "?Organization_1",
	        "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#RecordResource",
	        "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Organization",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?Organization_1",
	            "p": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#dateCreation",
	            "o": "?Date_2",
	            "sType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Organization",
	            "oType": "https://sparna-git.github.io/sparnatural-demonstrateur-an/ontology#Date",
	            "values": [
	              {
	                "label": "A partir de 1900",
	                "fromDate": "1900-01-01T00:00:00",
	                "toDate": null
	              }
	            ]
	          },
	          "children": []
	        }
	      ]
	    }
	  ]
	}
};