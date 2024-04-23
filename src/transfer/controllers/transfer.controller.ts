
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { CreateTransferDto, UpdateTransferDto, Transfer } from '../DTOs/transfer.dto';

// Define el controlador TransferController para manejar las rutas relacionadas con las transferencias
@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  // obtener todas las transferencias
  @Get()
  findAll(): Transfer[] {
    return this.transferService.findAll();
  }

  // obtener una transferencia por su ID
  @Get(':id')
  findOne(@Param('id') id: string): Transfer {
    return this.transferService.findOne(+id);
  }

  // crear una nueva transferencia
  @Post()
  create(@Body() createTransferDto: CreateTransferDto): Transfer {
    return this.transferService.create(createTransferDto);
  }

  // actualizar una transferencia por su ID
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransferDto: UpdateTransferDto): Transfer {
    return this.transferService.update(+id, updateTransferDto);
  }

  // eliminar una transferencia por su ID
  @Delete(':id')
  remove(@Param('id') id: string): Transfer {
    return this.transferService.remove(+id);
  }
}