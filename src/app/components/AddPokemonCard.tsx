import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AddPokemonCard = () => {
  return (
    <Card style={{ backgroundColor: '#8A2BE2', color: '#FFFFFF', cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Adicionar Pokémon</Typography>
        {/* Formulário para adicionar Pokémon */}
        {/* Exemplo: */}
        {/* <form>
          <input type="text" placeholder="Nome do Pokémon" />
          <button type="submit">Adicionar</button>
        </form> */}
      </CardContent>
    </Card>
  );
};

export default AddPokemonCard;
7