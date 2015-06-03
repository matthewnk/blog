$(document).ready( function(){
        displayDictionary();
        $("#addButton").click(addWord);

        $("#clearButton").click(function(){
          localStorage.removeItem('theDictionary');
          $('#wordList').html(" ");
        });
      });

      function addWord(e) {
        var entry = {};
        entry.word = $("#word").val();
        entry.definition = $("#definition").val();

        var dictionary = getDictionary();
        dictionary.push(entry);
        saveDictionary(dictionary);
        displayDictionary(getDictionary());
        e.preventDefault();
      }

      function displayDictionary(){
        var d = getDictionary();
        $wordList = $('#wordList');
        $wordList.html(" ");
        $.each(d, function(index, entry){
          $wordList.prepend("<dt>" + entry.word + "</dt><dd>" + entry.definition + "</dd>");
        });
      }

      function getDictionary(){
        if (localStorage.getItem('theDictionary') === null){
          return([]);
        } else {
          return(JSON.parse(localStorage.getItem('theDictionary')));
        }
      }

      function saveDictionary(d) {
        localStorage.setItem('theDictionary', JSON.stringify(d));
      }




