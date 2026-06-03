from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, ListFlowable, ListItem
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.units import inch

def generate_pdf():
    file_path = r'public\assets\downloads\Sistema_Gestion_Peluquerias_Completo.pdf'
    doc = SimpleDocTemplate(file_path, pagesize=A4, rightMargin=50, leftMargin=50, topMargin=50, bottomMargin=50)
    
    styles = getSampleStyleSheet()
    
    # Custom Styles
    style_tit_main = ParagraphStyle('MainTitle', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=26, textColor=colors.HexColor('#1A237E'), spaceAfter=40, alignment=TA_CENTER)
    style_h1 = ParagraphStyle('H1', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=18, textColor=colors.HexColor('#0D47A1'), spaceBefore=20, spaceAfter=10, borderPadding=2, borderThickness=1, borderColor=colors.HexColor('#0D47A1'))
    style_h2 = ParagraphStyle('H2', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=14, textColor=colors.HexColor('#1976D2'), spaceBefore=12, spaceAfter=8)
    style_h3 = ParagraphStyle('H3', parent=styles['Heading3'], fontName='Helvetica-Bold', fontSize=12, textColor=colors.HexColor('#0277BD'), spaceBefore=10, spaceAfter=6)
    style_body = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica', fontSize=11, leading=14, alignment=TA_JUSTIFY, spaceAfter=10)
    style_bullet = ParagraphStyle('Bullet', parent=style_body, leftIndent=25, bulletIndent=15, spaceAfter=6)
    style_footer = ParagraphStyle('Footer', parent=style_body, fontSize=8, textColor=colors.grey, alignment=TA_CENTER)

    story = []

    # --- PORTADA ---
    story.append(Spacer(1, 2.5*inch))
    story.append(Paragraph("SISTEMA DE GESTIÓN EN LA NUBE", style_tit_main))
    story.append(Paragraph("PARA PELUQUERÍAS Y ESTÉTICAS (SaaS)", ParagraphStyle('Subtitle', parent=style_tit_main, fontSize=18, textColor=colors.darkblue)))
    story.append(Spacer(1, 1.5*inch))
    story.append(Paragraph("<b>DOCUMENTACIÓN INTEGRAL DEL PROYECTO</b>", ParagraphStyle('Centered', parent=style_body, alignment=TA_CENTER, fontSize=12)))
    story.append(Spacer(1, 0.2*inch))
    story.append(Paragraph("Modernización Digital • Eficiencia Operativa • Escalabilidad en la Nube", ParagraphStyle('CenteredItalic', parent=style_body, alignment=TA_CENTER, fontSize=11, textColor=colors.grey)))
    story.append(PageBreak())

    # --- 1. RESUMEN EJECUTIVO ---
    story.append(Paragraph("1. Resumen Ejecutivo", style_h1))
    story.append(Paragraph("Se propone el desarrollo de una aplicación web en la nube orientada a peluquerías y centros de estética, que permita gestionar de forma integral la operación del negocio: clientes, agenda, servicios, ventas, inventario y control financiero.", style_body))
    story.append(Paragraph("El sistema elimina la necesidad de infraestructura física local (equipos y discos duros) y centraliza la información en servidores seguros, escalables y accesibles desde cualquier lugar.", style_body))

    # --- 2. FUNCIONAMIENTO ---
    story.append(Paragraph("2. Funcionamiento de la Aplicación", style_h1))
    story.append(Paragraph("El sistema está diseñado para facilitar la operación diaria del negocio mediante un flujo simple:", style_body))
    funcionamiento = [
        "El negocio se registra en la plataforma",
        "El administrador configura servicios, empleados y precios",
        "Los empleados gestionan citas o atienden clientes directamente",
        "Se registran los servicios realizados",
        "Se agregan productos vendidos (si aplica)",
        "El sistema calcula automáticamente el total",
        "Se registra el método de pago",
        "Se genera factura en PDF (opcional)",
        "Se actualiza el inventario automáticamente",
        "Se generan reportes financieros en tiempo real"
    ]
    for item in funcionamiento:
        story.append(Paragraph(f"• {item}", style_bullet))

    # --- 3. FLUJO COMPLETO DE USO ---
    story.append(Paragraph("3. Flujo Completo de Uso", style_h1))
    flujo = [
        "1. El cliente llega con o sin cita",
        "2. El empleado selecciona o registra al cliente",
        "3. Se registran los servicios realizados",
        "4. Se agregan productos vendidos (si aplica)",
        "5. El sistema calcula el total automáticamente",
        "6. Se registra el método de pago",
        "7. Se genera la factura (opcional)",
        "8. La información se guarda en la base de datos",
        "9. Se actualizan los reportes financieros"
    ]
    for step in flujo:
        story.append(Paragraph(step, style_body))

    # --- 4. ALCANCE FUNCIONAL ---
    story.append(Paragraph("4. Alcance Funcional", style_h1))
    alcance = ["Gestión de usuarios", "Gestión de clientes", "Configuración de servicios", "Agenda de citas", "Ventas y atención", "Facturación", "Inventario", "Gestión financiera", "Control de suscripción"]
    for item in alcance:
        story.append(Paragraph(f"• {item}", style_bullet))

    story.append(Paragraph("4.1 Descripción Detallada de Funcionalidades", style_h2))
    
    sections = [
        ("Gestión de usuarios", ["Registro de usuarios (administrador y empleados)", "Inicio de sesión seguro", "Asignación de roles", "Control de permisos"]),
        ("Gestión de clientes", ["Registro y edición de clientes", "Consulta de información", "Historial de servicios", "Atención sin registro previo"]),
        ("Configuración de servicios", ["Creación de servicios (barbería y estética)", "Asignación de código (ej: SRV-001)", "Definición de precios"]),
        ("Gestión de citas", ["Programación de citas", "Asignación de empleados", "Visualización de agenda", "Modificación o cancelación", "Atención con o sin cita"]),
        ("Atención al cliente (ventas)", ["Registro de servicios realizados", "Registro de productos vendidos", "Cálculo automático del total", "Generación de ventas"]),
        ("Facturación", ["Registro de método de pago (efectivo, transferencia, tarjeta)", "Generación de factura", "Generación de PDF", "Envío por correo electrónico"]),
        ("Inventario", ["Registro de productos", "Asignación de códigos (ej: ITM-001)", "Control de stock", "Descuento automático por ventas"]),
        ("Gestión de ingresos", ["Ingresos por día", "Ingresos por empleado", "Total general"]),
        ("Gestión de gastos", ["Registro de egresos (arriendo, servicios, compras)", "Clasificación de gastos"]),
        ("Comisiones de empleados", ["Configuración de porcentaje", "Cálculo automático según ventas", "Integración con ingresos"]),
        ("Reportes financieros", ["Ingresos totales", "Gastos totales", "Comisiones", "Utilidad neta"]),
        ("Control de suscripción", ["Validación automática en el backend", "Estados: activa, vencida, suspendida", "Bloqueo de funciones si no hay pago"])
    ]

    for title, items in sections:
        story.append(Paragraph(title, style_h3))
        for item in items:
            story.append(Paragraph(f"- {item}", style_bullet))

    story.append(PageBreak())

    # --- 4.2 ROLES Y RESPONSABILIDADES ---
    story.append(Paragraph("4.2 Roles y Responsabilidades del Sistema", style_h1))
    story.append(Paragraph("El sistema define dos roles principales dentro de la operación del negocio:", style_body))
    
    story.append(Paragraph("Administrador", style_h2))
    story.append(Paragraph("Encargado de la gestión general del negocio. Responsabilidades:", style_body))
    admin_resp = ["Gestión de usuarios (crear y administrar empleados)", "Configuración de servicios y precios", "Control de inventario", "Gestión de ingresos y gastos", "Administración de la contabilidad", "Gestión de nómina de empleados", "Configuración de comisiones", "Visualización de reportes financieros", "Supervisión general del sistema"]
    for resp in admin_resp:
        story.append(Paragraph(f"• {resp}", style_bullet))

    story.append(Paragraph("Peluquero (Empleado)", style_h2))
    story.append(Paragraph("Encargado de la operación diaria y atención al cliente. Responsabilidades:", style_body))
    pelu_resp = ["Gestión de citas", "Atención al cliente", "Registro de servicios realizados", "Registro de productos vendidos", "Generación de ventas", "Generación de factura al cliente", "Selección del método de pago"]
    for resp in pelu_resp:
        story.append(Paragraph(f"• {resp}", style_bullet))

    story.append(Paragraph("Control de acceso por rol", style_h3))
    story.append(Paragraph("• El administrador tiene acceso completo", style_bullet))
    story.append(Paragraph("• El peluquero tiene acceso únicamente a funciones operativas", style_bullet))
    story.append(Paragraph("Esto garantiza seguridad, control y correcta separación de responsabilidades.", style_body))

    # --- 5-7. INFRAESTRUCTURA Y COSTOS ---
    story.append(Paragraph("5. Infraestructura en la Nube", style_h1))
    story.append(Paragraph("La solución se implementa en plataformas como Microsoft Azure.", style_body))
    
    infra_data = [
        ['Componente', 'Descripción'],
        ['Backend (.NET)', 'Encargado de la lógica del sistema.'],
        ['Base de datos (PostgreSQL)', 'Almacenamiento de información.'],
        ['Almacenamiento', 'Archivos como facturas PDF.'],
        ['Frontend (Web)', 'Interfaz accesible desde navegador.']
    ]
    t_infra = Table(infra_data, colWidths=[1.8*inch, 3.5*inch])
    t_infra.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1A237E')), ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke), ('GRID', (0,0), (-1,-1), 0.5, colors.grey), ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'), ('PADDING', (0,0), (-1,-1), 8)]))
    story.append(t_infra)

    story.append(Paragraph("6. Costos en la Nube", style_h1))
    story.append(Paragraph("Etapa inicial (15–30 peluquerías): $100.000 – $300.000 COP / mes", style_body))
    story.append(Paragraph("Escala alta (800 peluquerías): $500.000 – $1.500.000 COP / mes", style_body))

    story.append(Paragraph("7. Costos Detallados por Servicio", style_h1))
    costos_det = [
        ['Servicio', 'Inicial (15-30 negocios)', 'Escala (800 negocios)'],
        ['Backend (.NET)', '$30.000 – $100.000', '$300.000 – $800.000'],
        ['Base de datos', '$60.000 – $150.000', '$200.000 – $600.000'],
        ['Almacenamiento', '$0 – $10.000', '$5.000 – $20.000'],
        ['Frontend', '$0 – $30.000', '$0 – $50.000']
    ]
    t_costs = Table(costos_det, colWidths=[1.5*inch, 1.8*inch, 1.8*inch])
    t_costs.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0D47A1')), ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke), ('GRID', (0,0), (-1,-1), 0.5, colors.grey), ('FONTSIZE', (0,0), (-1,-1), 10)]))
    story.append(t_costs)

    story.append(PageBreak())

    # --- 8-9. MODELO Y SUSCRIPCION ---
    story.append(Paragraph("8. Modelo Tradicional vs Nube", style_h1))
    compare_data = [
        ['Tradicional (obsoleto)', 'Nube (moderno)'],
        ['• Uso de discos duros', '• Sin hardware físico'],
        ['• Riesgo de pérdida', '• Acceso desde cualquier lugar'],
        ['• Acceso limitado', '• Seguridad y backups'],
        ['• Difícil crecimiento', '• Escalabilidad inmediata']
    ]
    t_comp = Table(compare_data, colWidths=[2.5*inch, 2.5*inch])
    t_comp.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,0), colors.HexColor('#455A64')), ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke), ('GRID', (0,0), (-1,-1), 0.5, colors.grey), ('VALIGN', (0,0), (-1,-1), 'TOP')]))
    story.append(t_comp)

    story.append(Paragraph("9. Control de Suscripción (Bloqueo por No Pago)", style_h1))
    story.append(Paragraph("El sistema funciona bajo un modelo de suscripción mensual.", style_body))
    story.append(Paragraph("<b>Funcionamiento:</b> El backend valida la suscripción en cada acción.", style_body))
    
    story.append(Paragraph("Estados de suscripción:", style_h3))
    states = [("Activa", "Uso completo del sistema."), ("Vencida", "No permite registrar ventas ni crear/modificar datos."), ("Suspendida", "Bloqueo total del sistema.")]
    for name, desc in states:
        story.append(Paragraph(f"<b>{name}:</b> {desc}", style_bullet))

    story.append(Paragraph("Detalles de Implementación:", style_h3))
    impl = ["Validación en backend (.NET)", "Control en cada endpoint", "Seguridad independiente del frontend"]
    for item in impl:
        story.append(Paragraph(f"• {item}", style_bullet))

    # --- 10-12. NEGOCIO ---
    story.append(Paragraph("10. Costos de Desarrollo", style_h1))
    story.append(Paragraph("Valor en el mercado: <b>$15.000.000 – $40.000.000 COP</b>", style_body))
    story.append(Paragraph("Ahorro: El desarrollo propio elimina este costo, pagando solo infraestructura.", style_body))

    story.append(Paragraph("11. Tiempo de Desarrollo", style_h1))
    story.append(Paragraph("• 1 programador: <b>3 a 5 meses</b>", style_bullet))
    story.append(Paragraph("• 2 programadores: <b>2 a 3 meses</b>", style_bullet))

    story.append(Paragraph("12. Modelo de Ingresos", style_h1))
    story.append(Paragraph("Suscripción mensual: <b>$100.000 – $130.000 COP</b> por negocio.", style_body))

    # --- 13. BENEFICIOS ---
    story.append(Paragraph("13. Beneficios del Sistema", style_h1))
    benefits = ["Organización total del negocio", "Control financiero en tiempo real", "Mejora en la atención al cliente", "Reducción de pérdidas", "Eliminación de hardware físico", "Escalabilidad inmediata"]
    for b in benefits:
        story.append(Paragraph(f"✓ {b}", style_bullet))

    # --- 14. CONCLUSION ---
    story.append(Spacer(1, 20))
    story.append(Paragraph("14. Conclusión", style_h1))
    story.append(Paragraph("Esta solución permite modernizar completamente la gestión de peluquerías y estéticas, reemplazando sistemas tradicionales por una plataforma en la nube, segura, escalable y rentable.", style_body))
    story.append(Paragraph("El modelo garantiza control total del negocio y sostenibilidad económica mediante suscripción mensual.", style_body))

    doc.build(story)
    print(f"PDF completo generado en: {file_path}")

if __name__ == '__main__':
    generate_pdf()
