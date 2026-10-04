package com.luis.producto.repository;

import com.luis.producto.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository  extends JpaRepository <Producto, Long> {
}
