$(document).ready( function(){
        displayDictionary(getDictionary());
        $("#addButton").click(addWord);
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

      function displayDictionary(d){
        $wordList = $('#wordList');
        $wordList.html(" ");
        $.each(d, function(index, entry){
          $wordList.prepend("<dt>" + entry.word + "</dt><dd>" + entry.definition + "</dd>");
        });
      }
      function saveDictionary(d) {
        localStorage.setItem('theDictionary', JSON.stringify(d));
      }

      function getDictionary(){
        if (localStorage.getItem('theDictionary') === null){
          return(initDictionary());
        } else {
          return(JSON.parse(localStorage.getItem('theDictionary')));
        }
      }

      function initDictionary(){
        var defaultDictionary = [
            {word: "foo", definition: "See 'bar'"},
            {word: "bar", definition: "See 'foo'"}
          ];
        return(defaultDictionary);
      }