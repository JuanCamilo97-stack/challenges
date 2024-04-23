//  DTO para crear una transferencia con las propiedades
export class CreateTransferDto {
    amount: number;
    senderAccount: string;
    recipientAccount: string;
  }
  
  //  DTO para actualizar una transferencia con las propiedades opcionales
  export class UpdateTransferDto {
    amount: number;
    senderAccount: string;
    recipientAccount: string;
  }
  
  //tipo para representar una transferencia con las propiedades
  export class Transfer {
    id: number;
    amount: number;
    senderAccount: string;
    recipientAccount: string;
  }