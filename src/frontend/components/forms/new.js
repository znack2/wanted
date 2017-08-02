

class AuthForm extends Component {

  render() {
    return (
      <FormGroup row>
        {
          order.map((id, index) => {
            const doc = data[id] || {}
            const { value = 0 } = doc
            return (
              <FormControlLabel
                key={ index }
                label={ value }
                control={
                <Checkbox
                  key={ index }
                  checked={ checkedId === id }
                  value={ id }

                  onChange={ this.onChange }
                />
              }
              />)
          })
        }
      </FormGroup>
    )
  }
}

