import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent {
    state= {src: ANIMAL_IMAGES[this.props.animal]}

    
    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps')
        console.log('nextProps')
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    render () {
        console.log('--> render')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
         )
        }
    }


    AnimalImage.propTypes = {
        animal: PropTypes.oneOf(ANIMALS)
    }

    AnimalImage.defaultProps = {
        animal: 'panda'
    }

    class Actualization extends Component {
        state = {animal: 'panda'}

        _renderAnimalButton =(animal) => {
            return (
              <button
              //disabled = {animal === this.state.animal} 
              key={animal} 
              onClick={() => this.setState ({ animal })}>
                {animal}
             </button>
        )
        }

        render () {
            return (
                <div>
                    <h4>Cicle of Actualization</h4>
                    {ANIMALS.map(this._renderAnimalButton)}
                    <AnimalImage animal = {this.state.animal} />
                </div>
            )
        }
    }

    export default Actualization