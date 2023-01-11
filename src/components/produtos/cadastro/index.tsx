import { Layout } from 'components'

export const CadastroProdutos: React.FC = () => {
  return (
    <Layout titulo="Produtos">
      <div className='field'>
        <label className='label' htmlFor='inputSku'>SKU: *</label>
        <div className='control'>
          <input className='input'
            id='inputSku'
            placeholder='Digite o SKU do Produto' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputPreco'>Preço: *</label>
        <div className='control'>
          <input className='input'
            id='inputPreco'
            placeholder='Digite o Preço do Produto' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputNome'>Nome: *</label>
        <div className='control'>
          <input className='input'
            id='inputNome'
            placeholder='Digite o Nome do Produto' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputDesc'>Descrição: *</label>
        <div className='control'>
          <textarea className='textarea'
            id='inputDesc'
            placeholder='Digite a Descrição detalhada do Produto' />
        </div>
      </div>

      <div className='field is-grouped'>
        <div className='control'>
          <button className='button'>Salvar</button>
        </div>
        <div className='control'>
          <button className='button'>Voltar</button>
        </div>
      </div>

    </Layout>
  )
}