# =====================================
# BASE GENERATION PROMPT
# =====================================

BASE_GENERATION_PROMPT = (

    "Create a highly realistic men's hairstyle "
    "transformation using the uploaded portrait. "

    "Preserve 100% facial identity, facial "
    "structure, skin texture, eye shape, nose, "
    "mouth, and realistic proportions. "

    "Generate professional barbershop-quality "
    "hair with realistic strands, natural "
    "lighting, realistic shadows, and "
    "photorealistic detail. "

    "The hairstyle must naturally blend with "
    "the head shape, hairline, and facial "
    "proportions."
)

# =====================================
# NEGATIVE PROMPT
# =====================================

NEGATIVE_PROMPT = (

    "low quality, blurry, unrealistic hair, "
    "deformed face, extra eyes, extra ears, "
    "cartoon, anime, distorted hairline, "
    "bad anatomy, unrealistic texture, "
    "duplicate face, mutated face"
)

# =====================================
# STRAIGHT HAIRSTYLE PROMPTS
# =====================================

HAIRSTYLE_PROMPTS = {

    # =================================
    # 1. POMPADOUR
    # =================================

    "Pompadour":
        (
            "luxury pompadour hairstyle, "
            "high volume top, slicked back hair, "
            "classic gentleman haircut, "
            "clean side fade, "
            "professional executive appearance, "
            "formal masculine hairstyle, "
            "natural straight hair texture, "
            "elegant premium barbershop style"
        ),

    # =================================
    # 2. QUIFF
    # =================================

    "Quiff":
        (
            "modern textured quiff hairstyle, "
            "natural front volume, "
            "styled upward hair direction, "
            "clean taper fade, "
            "korean modern hairstyle aesthetic, "
            "friendly trendy appearance, "
            "natural straight hair texture, "
            "professional barbershop result"
        ),

    # =================================
    # 3. SIDE PART
    # =================================

    "Side Part":
        (
            "classic side part hairstyle, "
            "clean side comb hairstyle, "
            "professional businessman haircut, "
            "smooth straight hair texture, "
            "elegant formal appearance, "
            "natural clean hairline, "
            "executive hairstyle aesthetic"
        ),

    # =================================
    # 4. SLICK BACK
    # =================================

    "Slick Back":
        (
            "slick back hairstyle, "
            "glossy combed back hair, "
            "luxury masculine hairstyle, "
            "sharp clean fade, "
            "professional executive haircut, "
            "natural straight hair texture, "
            "elegant formal hairstyle"
        ),

    # =================================
    # 5. UNDERCUT
    # =================================

    "Undercut":
        (
            "modern undercut hairstyle, "
            "sharp disconnected undercut, "
            "clean thin side fade, "
            "bold masculine haircut, "
            "stylish trendy hairstyle, "
            "natural straight hair texture, "
            "modern barbershop aesthetic"
        ),
            # =================================
    # 6. BUZZ CUT
    # =================================

    "Buzz Cut":
        (
            "clean buzz cut hairstyle, "
            "minimalist military haircut, "
            "ultra short straight hair, "
            "sharp masculine hairline, "
            "clean scalp fade, "
            "strong jawline appearance, "
            "simple practical hairstyle, "
            "professional clean aesthetic"
        ),

    # =================================
    # 7. CROP CUT
    # =================================

    "Crop Cut":
        (
            "modern crop cut hairstyle, "
            "short textured top hair, "
            "clean fringe haircut, "
            "minimalist professional hairstyle, "
            "natural straight hair texture, "
            "clean taper fade, "
            "modern european barbershop style"
        ),

    # =================================
    # 8. TEXTURED FRINGE
    # =================================

    "Textured Fringe":
        (
            "korean textured fringe hairstyle, "
            "soft natural fringe, "
            "messy layered front hair, "
            "natural straight hair texture, "
            "soft youthful appearance, "
            "modern korean hairstyle aesthetic, "
            "clean realistic hair strands"
        ),

    # =================================
    # 9. MULLET
    # =================================

    "Mullet":
        (
            "modern mullet hairstyle, "
            "short front with long back hair, "
            "edgy creative haircut, "
            "stylish modern mullet aesthetic, "
            "natural straight hair texture, "
            "bold masculine appearance, "
            "modern fashion hairstyle"
        ),

    # =================================
    # 10. COMMA HAIR
    # =================================

    "Comma Hair":
        (
            "korean comma hairstyle, "
            "soft comma fringe styling, "
            "natural middle front curve, "
            "soft layered straight hair, "
            "clean korean actor hairstyle, "
            "friendly youthful appearance, "
            "natural realistic hair texture"
        ),
            # =================================
    # 11. FRENCH CROP
    # =================================

    "French Crop":
        (
            "modern french crop hairstyle, "
            "short textured fringe, "
            "clean minimalist haircut, "
            "low taper fade, "
            "professional modern hairstyle, "
            "natural straight hair texture, "
            "european barbershop aesthetic, "
            "clean masculine appearance"
        ),

    # =================================
    # 12. CREW CUT
    # =================================

    "Crew Cut":
        (
            "clean crew cut hairstyle, "
            "short professional haircut, "
            "sharp masculine appearance, "
            "military inspired hairstyle, "
            "clean side fade, "
            "minimalist straight hair texture, "
            "formal professional haircut"
        ),

    # =================================
    # 13. TWO BLOCK
    # =================================

    "Two Block":
        (
            "korean two block hairstyle, "
            "soft layered top hair, "
            "natural volume hairstyle, "
            "clean side undercut, "
            "youthful korean hairstyle aesthetic, "
            "natural straight hair texture, "
            "friendly trendy appearance"
        ),

    # =================================
    # 14. IVY LEAGUE
    # =================================

    "Ivy League":
        (
            "classic ivy league hairstyle, "
            "clean executive haircut, "
            "professional elegant appearance, "
            "short side part hairstyle, "
            "formal gentleman hairstyle, "
            "natural straight hair texture, "
            "premium barbershop aesthetic"
        ),

    # =================================
    # 15. CURTAIN HAIR
    # =================================

    "Curtain Hair":
        (
            "korean curtain hairstyle, "
            "middle part hairstyle, "
            "soft layered front hair, "
            "natural straight hair flow, "
            "youthful korean actor hairstyle, "
            "soft realistic hair strands, "
            "modern trendy hairstyle aesthetic"
        ),
    # =================================
    # 1. WAVY CURTAIN
    # =================================

    "Wavy Curtain":
        (
            "korean wavy curtain hairstyle, "
            "soft middle part hairstyle, "
            "natural flowing waves, "
            "layered medium hair, "
            "soft youthful korean aesthetic, "
            "natural wavy hair texture, "
            "clean realistic hair strands, "
            "friendly trendy appearance"
        ),

    # =================================
    # 2. WAVY QUIFF
    # =================================

    "Wavy Quiff":
        (
            "modern wavy quiff hairstyle, "
            "natural front volume, "
            "soft textured waves, "
            "styled upward hair direction, "
            "clean taper fade, "
            "stylish masculine hairstyle, "
            "natural wavy hair texture, "
            "professional barbershop aesthetic"
        ),

    # =================================
    # 3. WAVY SIDE PART
    # =================================

    "Wavy Side Part":
        (
            "classic wavy side part hairstyle, "
            "natural side comb hairstyle, "
            "soft elegant waves, "
            "professional businessman haircut, "
            "formal masculine appearance, "
            "natural wavy hair texture, "
            "executive hairstyle aesthetic"
        ),

    # =================================
    # 4. BRO FLOW
    # =================================

    "Bro Flow":
        (
            "bro flow hairstyle, "
            "natural long flowing hair, "
            "relaxed masculine appearance, "
            "soft natural waves, "
            "medium long layered hairstyle, "
            "creative stylish aesthetic, "
            "natural wavy hair texture, "
            "casual flow hairstyle"
        ),

    # =================================
    # 5. MESSY WAVES
    # =================================

    "Messy Waves":
        (
            "messy wavy hairstyle, "
            "textured natural waves, "
            "casual korean hairstyle aesthetic, "
            "soft messy layered hair, "
            "modern youthful appearance, "
            "natural wavy hair texture, "
            "friendly trendy hairstyle"
        ),
    # =================================
    # 6. WAVY FRINGE
    # =================================

    "Wavy Fringe":
        (
            "soft wavy fringe hairstyle, "
            "natural forehead framing, "
            "layered wavy front hair, "
            "modern korean hairstyle aesthetic, "
            "soft youthful appearance, "
            "natural realistic waves, "
            "friendly relaxed hairstyle"
        ),

    # =================================
    # 7. WAVY UNDERCUT
    # =================================

    "Wavy Undercut":
        (
            "modern wavy undercut hairstyle, "
            "sharp clean undercut, "
            "natural textured waves on top, "
            "bold masculine haircut, "
            "stylish modern barbershop aesthetic, "
            "natural wavy hair texture, "
            "clean side fade hairstyle"
        ),

    # =================================
    # 8. SURFER HAIR
    # =================================

    "Surfer Hair":
        (
            "long surfer hairstyle, "
            "natural beach waves, "
            "relaxed flow hairstyle, "
            "casual masculine appearance, "
            "soft layered long hair, "
            "natural wavy hair texture, "
            "sun-kissed surfer aesthetic"
        ),

    # =================================
    # 9. WAVY TWO BLOCK
    # =================================

    "Wavy Two Block":
        (
            "korean wavy two block hairstyle, "
            "soft layered waves, "
            "natural korean hairstyle volume, "
            "clean undercut sides, "
            "friendly youthful appearance, "
            "natural wavy hair texture, "
            "modern korean actor hairstyle"
        ),

    # =================================
    # 10. TEXTURED WAVES
    # =================================

    "Textured Waves":
        (
            "modern textured wavy hairstyle, "
            "natural messy wave texture, "
            "soft layered medium hair, "
            "stylish casual hairstyle, "
            "natural realistic waves, "
            "modern masculine appearance, "
            "clean barbershop hairstyle aesthetic"
        ),
    # =================================
    # 11. WAVY COMMA HAIR
    # =================================

    "Wavy Comma Hair":
        (
            "korean wavy comma hairstyle, "
            "soft comma fringe styling, "
            "natural flowing waves, "
            "layered korean hairstyle, "
            "friendly youthful appearance, "
            "natural wavy hair texture, "
            "modern korean actor hairstyle aesthetic"
        ),

    # =================================
    # 12. MEDIUM FLOW
    # =================================

    "Medium Flow":
        (
            "medium flow hairstyle, "
            "natural layered flow hair, "
            "relaxed masculine appearance, "
            "soft natural waves, "
            "medium long hairstyle, "
            "creative stylish aesthetic, "
            "natural wavy hair texture"
        ),

    # =================================
    # 13. LAYERED WAVES
    # =================================

    "Layered Waves":
        (
            "layered wavy hairstyle, "
            "soft elegant waves, "
            "natural layered haircut, "
            "modern stylish appearance, "
            "clean medium hairstyle, "
            "natural wavy hair texture, "
            "refined masculine aesthetic"
        ),

    # =================================
    # 14. WAVY SLICK BACK
    # =================================

    "Wavy Slick Back":
        (
            "luxury wavy slick back hairstyle, "
            "glossy combed back waves, "
            "professional executive haircut, "
            "clean formal hairstyle, "
            "natural wavy hair texture, "
            "sharp masculine appearance, "
            "premium barbershop aesthetic"
        ),

    # =================================
    # 15. MODERN WAVY MULLET
    # =================================

    "Modern Wavy Mullet":
        (
            "modern wavy mullet hairstyle, "
            "short front with flowing back hair, "
            "edgy creative haircut, "
            "natural textured waves, "
            "bold trendy appearance, "
            "modern fashion hairstyle aesthetic, "
            "natural wavy hair texture"
        ),
    # =================================
    # 1. CURLY FRINGE
    # =================================

    "Curly Fringe":
        (
            "curly fringe hairstyle, "
            "defined natural curls, "
            "soft forehead framing curls, "
            "modern youthful hairstyle, "
            "natural curly hair texture, "
            "friendly relaxed appearance, "
            "clean realistic curl strands"
        ),

    # =================================
    # 2. CURLY FADE
    # =================================

    "Curly Fade":
        (
            "modern curly fade hairstyle, "
            "clean low fade haircut, "
            "defined curly top hair, "
            "sharp modern barbershop style, "
            "natural curly hair texture, "
            "stylish masculine appearance, "
            "professional fade aesthetic"
        ),

    # =================================
    # 3. CURLY UNDERCUT
    # =================================

    "Curly Undercut":
        (
            "modern curly undercut hairstyle, "
            "sharp disconnected undercut, "
            "thick curly volume on top, "
            "bold masculine haircut, "
            "natural curly hair texture, "
            "stylish trendy appearance, "
            "clean fade sides"
        ),

    # =================================
    # 4. CURLY CROP
    # =================================

    "Curly Crop":
        (
            "modern curly crop hairstyle, "
            "short textured curls, "
            "clean fringe haircut, "
            "minimalist masculine appearance, "
            "natural curly hair texture, "
            "professional modern hairstyle, "
            "clean realistic curl definition"
        ),

    # =================================
    # 5. CURLY QUIFF
    # =================================

    "Curly Quiff":
        (
            "curly quiff hairstyle, "
            "natural curly front volume, "
            "styled upward curls, "
            "modern masculine hairstyle, "
            "clean taper fade, "
            "natural curly hair texture, "
            "stylish professional appearance"
        ),
            # =================================
    # 6. CURLY TWO BLOCK
    # =================================

    "Curly Two Block":
        (
            "korean curly two block hairstyle, "
            "soft layered curly hair, "
            "natural curly volume, "
            "clean undercut sides, "
            "friendly youthful appearance, "
            "natural curly hair texture, "
            "modern korean hairstyle aesthetic"
        ),

    # =================================
    # 7. CURLY SLICK BACK
    # =================================

    "Curly Slick Back":
        (
            "curly slick back hairstyle, "
            "glossy combed back curls, "
            "luxury masculine hairstyle, "
            "professional executive appearance, "
            "natural curly hair texture, "
            "sharp clean fade, "
            "premium barbershop aesthetic"
        ),

    # =================================
    # 8. CURLY SIDE PART
    # =================================

    "Curly Side Part":
        (
            "curly side part hairstyle, "
            "natural side comb curls, "
            "elegant professional haircut, "
            "soft defined curls, "
            "formal masculine appearance, "
            "natural curly hair texture, "
            "classic barbershop hairstyle"
        ),

    # =================================
    # 9. CURLY MULLET
    # =================================

    "Curly Mullet":
        (
            "modern curly mullet hairstyle, "
            "short curly front with long back curls, "
            "edgy creative haircut, "
            "bold trendy appearance, "
            "natural curly hair texture, "
            "fashionable modern hairstyle aesthetic, "
            "defined realistic curls"
        ),

    # =================================
    # 10. CURLY FLOW
    # =================================

    "Curly Flow":
        (
            "curly flow hairstyle, "
            "natural flowing curly hair, "
            "soft layered curls, "
            "relaxed masculine appearance, "
            "medium long curly hairstyle, "
            "natural curly hair texture, "
            "creative stylish aesthetic"
        ),
    # =================================
    # 11. CURLY COMMA HAIR
    # =================================

    "Curly Comma Hair":
        (
            "korean curly comma hairstyle, "
            "soft comma fringe curls, "
            "natural layered curly hair, "
            "friendly youthful appearance, "
            "natural curly hair texture, "
            "modern korean hairstyle aesthetic, "
            "soft realistic curl strands"
        ),

    # =================================
    # 12. CURLY CURTAIN
    # =================================

    "Curly Curtain":
        (
            "curly curtain hairstyle, "
            "middle part curly hairstyle, "
            "soft flowing curls, "
            "natural layered curtain hair, "
            "modern korean hairstyle aesthetic, "
            "natural curly hair texture, "
            "friendly relaxed appearance"
        ),

    # =================================
    # 13. CURLY BRO FLOW
    # =================================

    "Curly Bro Flow":
        (
            "curly bro flow hairstyle, "
            "natural long flowing curls, "
            "relaxed masculine appearance, "
            "medium long layered curly hair, "
            "natural curly hair texture, "
            "creative stylish aesthetic, "
            "soft realistic curl definition"
        ),

    # =================================
    # 14. CURLY TEXTURED CROP
    # =================================

    "Curly Textured Crop":
        (
            "curly textured crop hairstyle, "
            "short defined curls, "
            "modern textured haircut, "
            "clean masculine appearance, "
            "professional modern hairstyle, "
            "natural curly hair texture, "
            "sharp realistic curl strands"
        ),

    # =================================
    # 15. CURLY TAPER FADE
    # =================================

    "Curly Taper Fade":
        (
            "modern curly taper fade hairstyle, "
            "clean taper fade sides, "
            "natural curly top volume, "
            "sharp barbershop haircut, "
            "stylish masculine appearance, "
            "natural curly hair texture, "
            "defined realistic curls"
        ),
    # =================================
    # 1. AFRO FADE
    # =================================

    "Afro Fade":
        (
            "modern afro fade hairstyle, "
            "tight coily afro texture, "
            "clean low fade haircut, "
            "sharp natural hairline, "
            "defined afro volume, "
            "modern barbershop aesthetic, "
            "bold masculine appearance, "
            "realistic coily hair strands"
        ),

    # =================================
    # 2. TWIST OUT
    # =================================

    "Twist Out":
        (
            "twist out coily hairstyle, "
            "defined natural twist texture, "
            "detailed afro curls, "
            "soft coily volume, "
            "stylish modern appearance, "
            "natural coily hair texture, "
            "clean realistic twist strands"
        ),

    # =================================
    # 3. COILY TAPER FADE
    # =================================

    "Coily Taper Fade":
        (
            "coily taper fade hairstyle, "
            "sharp clean taper fade, "
            "tight coily top texture, "
            "natural afro curls, "
            "modern masculine haircut, "
            "professional barbershop style, "
            "realistic coily hair detail"
        ),

    # =================================
    # 4. SHORT AFRO
    # =================================

    "Short Afro":
        (
            "short afro hairstyle, "
            "natural tight coily texture, "
            "clean rounded afro shape, "
            "minimalist masculine appearance, "
            "soft afro volume, "
            "natural realistic coils, "
            "modern clean afro aesthetic"
        ),

    # =================================
    # 5. COILY HIGH TOP
    # =================================

    "Coily High Top":
        (
            "coily high top hairstyle, "
            "high afro top volume, "
            "sharp fade sides, "
            "defined tight coily texture, "
            "bold stylish appearance, "
            "retro modern afro aesthetic, "
            "realistic coily hair strands"
        ),
    # =================================
    # 6. COILY SPONGE TWIST
    # =================================

    "Coily Sponge Twist":
        (
            "coily sponge twist hairstyle, "
            "defined sponge twist texture, "
            "tight coily twist curls, "
            "modern afro hairstyle, "
            "clean fade sides, "
            "natural coily hair texture, "
            "sharp realistic twist detail"
        ),

    # =================================
    # 7. BURST FADE AFRO
    # =================================

    "Burst Fade Afro":
        (
            "burst fade afro hairstyle, "
            "rounded afro top volume, "
            "sharp burst fade around ears, "
            "tight coily afro texture, "
            "modern stylish afro haircut, "
            "clean barbershop aesthetic, "
            "realistic afro hair strands"
        ),

    # =================================
    # 8. COILY MOHAWK
    # =================================

    "Coily Mohawk":
        (
            "coily mohawk hairstyle, "
            "tight afro curls on center top, "
            "clean shaved fade sides, "
            "bold masculine hairstyle, "
            "modern edgy afro haircut, "
            "natural coily texture, "
            "realistic curl detail"
        ),

    # =================================
    # 9. COILY FROHAWK
    # =================================

    "Coily Frohawk":
        (
            "coily frohawk hairstyle, "
            "natural afro mohawk shape, "
            "tight coily volume, "
            "sharp fade sides, "
            "stylish modern afro hairstyle, "
            "bold masculine appearance, "
            "realistic coily afro strands"
        ),

    # =================================
    # 10. COILY DREAD TOP
    # =================================

    "Coily Dread Top":
        (
            "coily dread top hairstyle, "
            "short afro dreadlocks on top, "
            "clean taper fade sides, "
            "defined coily dread texture, "
            "modern stylish afro haircut, "
            "natural realistic dread strands, "
            "professional barbershop aesthetic"
        ),
    # =================================
    # 11. COILY FLAT TOP
    # =================================

    "Coily Flat Top":
        (
            "coily flat top hairstyle, "
            "sharp geometric afro top shape, "
            "tight coily afro texture, "
            "clean fade sides, "
            "retro modern afro aesthetic, "
            "bold masculine appearance, "
            "realistic coily hair detail"
        ),

    # =================================
    # 12. COILY TEMPLE FADE
    # =================================

    "Coily Temple Fade":
        (
            "coily temple fade hairstyle, "
            "sharp temple fade haircut, "
            "tight coily top texture, "
            "clean natural hairline, "
            "modern professional afro hairstyle, "
            "realistic coily hair strands, "
            "clean barbershop aesthetic"
        ),

    # =================================
    # 13. AFRO TWISTS
    # =================================

    "Afro Twists":
        (
            "afro twists hairstyle, "
            "defined natural afro twists, "
            "soft coily twist texture, "
            "medium afro volume, "
            "stylish modern afro hairstyle, "
            "natural realistic twist strands, "
            "creative masculine appearance"
        ),

    # =================================
    # 14. COILY CURLY TOP
    # =================================

    "Coily Curly Top":
        (
            "coily curly top hairstyle, "
            "tight coily curls on top, "
            "clean fade sides, "
            "modern stylish afro haircut, "
            "natural afro volume, "
            "realistic coily curl texture, "
            "sharp masculine appearance"
        ),

    # =================================
    # 15. COILY LAYERED AFRO
    # =================================

    "Coily Layered Afro":
        (
            "coily layered afro hairstyle, "
            "layered afro volume, "
            "soft natural coily texture, "
            "modern afro hairstyle aesthetic, "
            "natural realistic afro strands, "
            "stylish masculine appearance, "
            "clean professional afro haircut"
        ),
}