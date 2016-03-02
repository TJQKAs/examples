<!-- php file generate our xml file  -->
<?php
// by this statement we tell that we gonna generate xml code ... two lines below are necessairy always
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
// all our code between this response tags... whenever we type smth in our input form it's sent to the server to script in these tags , we take info and store to the var
echo '<response>';
// we store input data to var food
    $food = $_GET['food'];
    // and this is our database??? -  well, simple array with data
    $foodArray = array('tuna', 'bacon', 'beef', 'pork', 'tea', 'fryed cheese', 'bread', 'ham' );
 // in_array is php function which checks whether input data is contained in our array data, and has two params 1) var - food 2) name of array - foodArray in which we checke it
    if (in_array($food,  $foodArray))
    // postive answer
      echo 'We do have  '.$food.' ! ';
      elseif ($food==' ')
      // in empty input case
      echo  'Please enter a food which you would like to order';
      else
      // negative answer
      echo "Sorry but we haven't".$food.'!';

echo'</response>';
 ?>>
