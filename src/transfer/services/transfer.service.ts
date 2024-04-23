import { Injectable, NotFoundException } from '@nestjs/common';
// Importa los DTOs y el tipo Transfer desde '../DTOs/transfer.dto'
import { CreateTransferDto, UpdateTransferDto, Transfer } from '../DTOs/transfer.dto';


@Injectable()
export class TransferService {
 
  private transfers: Transfer[] = [];

  // Método para obtener todas las transferencias
  findAll(): Transfer[] {
    return this.transfers;
  }

  // Método para encontrar una transferencia por su ID
  findOne(id: number): Transfer {
    // Busca la transferencia en el array de transfers
    const transfer = this.transfers.find((t) => t.id === id);
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return transfer;
  }

  // crear una nueva transferencia
  create(createTransferDto: CreateTransferDto): Transfer {
    const newTransfer: Transfer = { id: this.generateId(), ...createTransferDto };
    this.transfers.push(newTransfer);
    return newTransfer;
  }

  update(id: number, updateTransferDto: UpdateTransferDto): Transfer {
    const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    this.transfers[index] = { ...this.transfers[index], ...updateTransferDto };
    return this.transfers[index];
  }

  remove(id: number): Transfer {
    const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    const deletedTransfer = this.transfers.splice(index, 1);
    return deletedTransfer[0];
  }
  private generateId(): number {
    return this.transfers.length > 0
      ? Math.max(...this.transfers.map((t) => t.id)) + 1
      : 1;
  }
}
