import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvaliacaoList } from '../../components/AvaliacaoList';
import { mockComments } from '../../mocks/CommentMock';
import { mockUsers } from '../../mocks/UserMock';


vi.mock('../../hooks/useAuth', () => ({
  useAuth: () => ({
    currentUser: mockUsers[1],
  }),
}));


vi.mock('../../hooks/useComment', () => ({
  useComment: () => ({
    addComment: vi.fn(),
  }),
}));


describe('Página de Avaliações - Integração', () => {
  const getUserNameById = (id: string) => {
    return mockUsers.find((u) => u.id === id)?.name || 'Desconhecido';
  };


  const onDelete = vi.fn();
  const onEdit = vi.fn();


  it('deve renderizar os comentários corretamente', () => {
    render(
      <AvaliacaoList
        comentarios={mockComments}
        getUserNameById={getUserNameById}
        currentUserId={"user-2"}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );


    expect(screen.getByText(/30\/05\/2025/)).toBeInTheDocument();
    expect(screen.getByText(/Ana/)).toBeInTheDocument();


    expect(screen.getByText(/22\/05\/2025/)).toBeInTheDocument();
    expect(screen.getByText(/Maria/)).toBeInTheDocument();


    expect(screen.getByText(/Editar/)).toBeInTheDocument();
    expect(screen.getByText(/Excluir/)).toBeInTheDocument();
  });
});


