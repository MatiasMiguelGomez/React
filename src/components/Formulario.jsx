export const Formulario = ({ handleSubmit, person, handleData, error }) => {
  return (
    <form className='form-checkout' onSubmit={handleSubmit}>
      <label htmlFor='name'> Nombre</label>
      <input
        type='text'
        id='name'
        value={person.name}
        onChange={handleData}
        required
      />
      <label htmlFor='lastName'> Apellido</label>
      <input
        type='text'
        id='lastName'
        value={person.lastName}
        onChange={handleData}
        required
      />
      <label htmlFor='email'>Mail</label>
      <input
        type='email'
        id='email'
        value={person.email}
        onChange={handleData}
        required
      />
      <label htmlFor='confEmail'>Confirma tu mail </label>
      <input
        type='email'
        id='confEmail'
        value={person.confEmail}
        onChange={handleData}
        required
      />
      <p className={`checkmail ${error}`} htmlFor=''>
        El mail ingresado no coincide
      </p>
      <label htmlFor='phoneNumber'> Celular</label>
      <input
        type='number'
        id='phoneNumber'
        value={person.phoneNumber}
        onChange={handleData}
        required
      />
      <button type='submit'>Finalizar Compra</button>
    </form>
  );
};
