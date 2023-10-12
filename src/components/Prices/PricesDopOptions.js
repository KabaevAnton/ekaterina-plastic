import './Prices.css'
import Prices from './Prices'

function pricesDopOptions (props) {
    return (
        <Prices isOpen={props.isOpen} onBurger={props.onBurger} >
          <div className='prices__catalog'>
                  <ul className='prices__elements'>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>01/</p>
                        <p className='prices__items-subtitle'>УДАЛЕНИЕ НОВООБРАЗОВАНИЙ</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразований </p>
                        <p className='prices__price'>От 1100₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования<br></br>папилломы до 0,5 см (ФОТЕК)</p>
                        <p className='prices__price'>1100₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования<br></br>с анестезией (ФОТЕК) </p>
                        <p className='prices__price'>3800₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования на глазу<br></br>веко (ФОТЕК)</p>
                        <p className='prices__price'>4500₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования на глазу<br></br>веко (ФОТЕК)</p>
                        <p className='prices__price'>4500₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования<br></br>1 категория с анестезией (ФОТЕК) </p>
                        <p className='prices__price'>5500₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования<br></br>в интимной зоне (ФОТЕК)</p>
                        <p className='prices__price'>5500₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования<br></br>2 категория с анестезией (ФОТЕК)</p>
                        <p className='prices__price'>8800₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразований до 0,2 см<br></br>1 зона (ФОТЕК) </p>
                        <p className='prices__price'>11000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Удаление новообразования<br></br> 3 категория с анестезией (ФОТЕК)</p>
                        <p className='prices__price'>13500₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Хирургическое удаление новообразования<br></br> 2 категория </p>
                        <p className='prices__price'>16500₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Хирургическое удаление новообразования<br></br>3 категория </p>
                        <p className='prices__price'>22000₽</p>
                      </div>
                    </li>
                  </ul>
              </div>
        </Prices>
      )
  }

  export default pricesDopOptions;