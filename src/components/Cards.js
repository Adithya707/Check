import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these latest farming techniques!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/shift.jpg'
              text='In this type of farming system, usually a small extent of forest land is cleared for growing crops. Mostly tribal farmers used to practice this. This is done by removing dried up trees, burning tree trunks, tree branches, and other weeds.'
              label='Shifting Agriculture'
              path='/services'
            />
            <CardItem
              src='images/int.jpeg'
              text='Well, it is a cultivation practice where one can obtain a high yield per unit area. As farmers use fertilizers and pest controls on a great extent, especially where irrigation facilities are available. They also try to sow the seeds of high yielding with modern farming methods by using machinery.'
              label='Intensive Farming'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sub.jpeg'
              text='This farming system is being used by many farmers in India as most of them are small scale farmers who cannot able to afford high yielding seeds and required crop fertilizers'
              label='Subsistence Farming'
              path='/services'
            />
            <CardItem
              src='images/DRY.jpg'
              text='Dry agriculture is growing crops in drought areas where fewer irrigation facilities are available. Farmers grow drought-resistant crop varieties. This is mostly practiced in areas where average annual rainfall is low.'
              label='Dry Farming'
              path='/products'
            />
            <CardItem
              src='images/Pla.jpeg'
              text='Plantation farming is nothing but a tree or bush farming which had been introduced by the British around the 19th century. It mostly refers to single crop orchards or crops such as tea, rubber, spice crops, coconut, coffee, lime, oranges, apples etc.'
              label='Plantation Agriculture'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
