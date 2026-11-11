import { useEffect, useState } from 'react'

const API = 'http://localhost:3000/pessoas'

function App() {
  const [pessoas, setPessoas] = useState([])
  const [nome, setNome] = useState('')
  const [editandoId, setEditandoId] = useState(null)
  const [erro, setErro] = useState('')

  async function carregar() {
    try {
      const resp = await fetch(API)
      setPessoas(await resp.json())
      setErro('')
    } catch {
      setErro('Não foi possível conectar à API. O backend está rodando?')
    }
  }

  useEffect(() => { carregar() }, [])

  async function salvar(e) {
    e.preventDefault()
    if (!nome.trim()) return
    const url = editandoId ? `${API}/${editandoId}` : API
    const method = editandoId ? 'PUT' : 'POST'
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pes_nome: nome.trim() }),
    })
    cancelar()
    carregar()
  }

  function editar(pessoa) {
    setEditandoId(pessoa.pes_id)
    setNome(pessoa.pes_nome ?? '')
  }

  function cancelar() {
    setEditandoId(null)
    setNome('')
  }

  async function excluir(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    if (editandoId === id) cancelar()
    carregar()
  }

  return (
    <div className="container">
      <h1>Cadastro de Pessoas</h1>

      <form onSubmit={salvar}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">{editandoId ? 'Salvar alteração' : 'Cadastrar'}</button>
        {editandoId && <button type="button" onClick={cancelar}>Cancelar</button>}
      </form>

      {erro && <p className="erro">{erro}</p>}

      <table>
        <thead>
          <tr><th>ID</th><th>Nome</th><th>Ações</th></tr>
        </thead>
        <tbody>
          {pessoas.map((p) => (
            <tr key={p.pes_id}>
              <td>{p.pes_id}</td>
              <td>{p.pes_nome}</td>
              <td>
                <button onClick={() => editar(p)}>Editar</button>
                <button onClick={() => excluir(p.pes_id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
