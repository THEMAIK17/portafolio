from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.units import inch

def generate_pdf():
    file_path = r'public\assets\downloads\Sistema_Gestion_Peluquerias_Premium.pdf'
    doc = SimpleDocTemplate(file_path, pagesize=A4, rightMargin=72, leftMargin=72, topMargin=72, bottomMargin=72)
    
    styles = getSampleStyleSheet()
    
    # Custom Styles
    style_title = ParagraphStyle(
        'MainTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=24,
        textColor=colors.HexColor('#1A237E'), # Deep Blue
        spaceAfter=30,
        alignment=TA_CENTER
    )
    
    style_h1 = ParagraphStyle(
        'Header1',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        textColor=colors.HexColor('#0D47A1'),
        spaceBefore=15,
        spaceAfter=10,
        borderPadding=5,
        borderWidth=0,
        borderStyle=None
    )
    
    style_h2 = ParagraphStyle(
        'Header2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=14,
        textColor=colors.HexColor('#1565C0'),
        spaceBefore=10,
        spaceAfter=8
    )
    
    style_body = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=14,
        alignment=TA_JUSTIFY,
        spaceAfter=10
    )
    
    style_bullet = ParagraphStyle(
        'BulletPoint',
        parent=style_body,
        leftIndent=20,
        bulletIndent=10,
        spaceAfter=5
    )

    story = []

    # --- COVER PAGE ---
    story.append(Spacer(1, 2*inch))
    story.append(Paragraph("SISTEMA DE GESTIÓN EN LA NUBE PARA PELUQUERÍAS Y ESTÉTICAS (SaaS)", style_title))
    story.append(Spacer(1, 1*inch))
    story.append(Paragraph("<b>Propuesta Técnica y Operativa</b>", ParagraphStyle('Sub', parent=style_body, alignment=TA_CENTER, fontSize=14)))
    story.append(Spacer(1, 0.5*inch))
    story.append(Paragraph("<i>Modernización, Escalabilidad y Control Total</i>", ParagraphStyle('Sub2', parent=style_body, alignment=TA_CENTER, fontSize=12, textColor=colors.grey)))
    story.append(PageBreak())

    # --- 1. RESUMEN EJECUTIVO ---
    story.append(Paragraph("1. Resumen Ejecutivo", style_h1))
    story.append(Paragraph("Se propone el desarrollo de una aplicación web en la nube orientada a peluquerías y centros de estética, que permita gestionar de forma integral la operación del negocio: clientes, agenda, servicios, ventas, inventario y control financiero.", style_body))
    story.append(Paragraph("El sistema elimina la necesidad de infraestructura física local (equipos y discos duros) y centraliza la información en servidores seguros, escalables y accesibles desde cualquier lugar.", style_body))

    # --- 2. FUNCIONAMIENTO ---
    story.append(Paragraph("2. Funcionamiento de la Aplicación", style_h1))
    flow_items = [
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
    for item in flow_items:
        story.append(Paragraph(f"• {item}", style_bullet))

    # --- 4. ALCANCE FUNCIONAL ---
    story.append(Paragraph("4. Alcance Funcional", style_h1))
    func_list = ["Gestión de usuarios", "Gestión de clientes", "Configuración de servicios", "Agenda de citas", "Ventas y atención", "Facturación", "Inventario", "Gestión financiera", "Control de suscripción"]
    for f in func_list:
        story.append(Paragraph(f"• {f}", style_bullet))

    story.append(Paragraph("4.1 Detalles de Funcionalidades", style_h2))
    
    # Nested functionality
    details = {
        "Gestión de Usuarios": ["Registro de administrador y empleados", "Inicio de sesión seguro", "Asignación de roles y permisos"],
        "Gestión de Clientes": ["Registro y edición", "Historial de servicios", "Atención sin registro previo"],
        "Configuración de Servicios": ["Creación de servicios (barbería y estética)", "Asignación de códigos (ej: SRV-001)", "Definición de precios"],
        "Gestión de Citas": ["Programación y visualización de agenda", "Asignación de empleados", "Modificación o cancelación"],
        "Atención al Cliente": ["Registro de servicios y productos", "Cálculo automático del total"],
        "Facturación": ["Métodos de pago (Efectivo, Transferencia, Tarjeta)", "Generación de PDF y envío por correo"],
        "Inventario": ["Control de stock", "Descuento automático por ventas"],
        "Finanzas": ["Ingresos por día/empleado", "Control de gastos (egresos)", "Cálculo automático de comisiones", "Reportes de utilidad neta"]
    }

    for title, items in details.items():
        story.append(Paragraph(f"<b>{title}</b>", style_body))
        for item in items:
            story.append(Paragraph(f"- {item}", style_bullet))

    # --- 5. INFRAESTRUCTURA ---
    story.append(Paragraph("5. Infraestructura en la Nube", style_h1))
    story.append(Paragraph("Implementación en Microsoft Azure para máxima disponibilidad.", style_body))
    
    data = [['Componente', 'Tecnología'],
            ['Backend', '.NET Core / Web API'],
            ['Base de Datos', 'PostgreSQL'],
            ['Almacenamiento', 'Azure Blob Storage (Facturas PDF)'],
            ['Frontend', 'React / Next.js (Web Responsive)']]
    
    t = Table(data, colWidths=[2*inch, 3*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1A237E')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#E8EAF6')),
        ('GRID', (0,0), (-1,-1), 1, colors.white)
    ]))
    story.append(t)
    story.append(Spacer(1, 15))

    # --- 6-7. COSTOS ---
    story.append(Paragraph("6. Estimación de Costos (COP)", style_h1))
    cost_data = [
        ['Escala', 'Usuarios (Peluquerías)', 'Costo Mensual Aproximado'],
        ['Inicial', '15 - 30', '$100.000 - $300.000'],
        ['Alta', '800+', '$500.000 - $1.500.000']
    ]
    t2 = Table(cost_data, colWidths=[1.5*inch, 1.5*inch, 2*inch])
    t2.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0D47A1')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('GRID', (0,0), (-1,-1), 1, colors.white)
    ]))
    story.append(t2)

    # --- 8. COMPARATIVA ---
    story.append(Paragraph("8. Modelo Tradicional vs Nube", style_h1))
    comp_data = [
        ['Factor', 'Tradicional (Obsoleto)', 'Nube (Moderno)'],
        ['Hardware', 'Discos duros locales', 'Sin hardware físico'],
        ['Seguridad', 'Riesgo de pérdida', 'Backups y seguridad Azure'],
        ['Acceso', 'Solo en local', 'Acceso global 24/7'],
        ['Escalabilidad', 'Limitada / Difícil', 'Inmediata']
    ]
    t3 = Table(comp_data, colWidths=[1.2*inch, 1.9*inch, 1.9*inch])
    t3.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#455A64')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('GRID', (0,0), (-1,-1), 1, colors.white)
    ]))
    story.append(t3)

    # --- 13. BENEFICIOS ---
    story.append(Paragraph("13. Beneficios Clave", style_h1))
    beneficios = [
        "Organización total del flujo de trabajo",
        "Control financiero riguroso en tiempo real",
        "Mejora significativa en la experiencia del cliente",
        "Reducción de pérdidas por falta de inventario",
        "Escalabilidad para múltiples sucursales"
    ]
    for b in beneficios:
        story.append(Paragraph(f"✓ {b}", style_bullet))

    # --- CONCLUSION ---
    story.append(Spacer(1, 20))
    story.append(Paragraph("Conclusión", style_h2))
    story.append(Paragraph("Esta solución moderniza la gestión de peluquerías, eliminando barreras tecnológicas y garantizando la sostenibilidad mediante un modelo SaaS rentable.", style_body))

    doc.build(story)
    print(f"PDF generado satisfactoriamente en: {file_path}")

if __name__ == '__main__':
    generate_pdf()
