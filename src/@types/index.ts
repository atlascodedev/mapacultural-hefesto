
export type RaceTypes = "Branca" | "Indígena" | "Parda" | "Preta" |  "Amarela"

export type FormGenderTypes = "Homem" | "Homem transsexual" | "Mulher" | "Mulher transsexual" | "Não-binário" | "Travesti" | "Outros" | "Não se aplica"

export type CulturalCategoryTypes = "Artes visuais" | "Artesanato" | "Audiovisual" | "Circo" | "Cultura popular" | "Cultura viva" | "Dança" | "Folclore" | "Literatura/Leitura/Livro/Diversidade linguística" | "Memória e patrimônio" | "Museu" | "Música" | "Produção cultural" | "Rádio" | "Teatro" | "Tradicionalismo" | "Outros"

export type CulturalSpaceTypes = "Antiquário" | "Arquivo privado" | "Arquivo público" | "Ateliê" | "Bem imóvel" | "Biblioteca comunitária (incluindo pontos de leitura)" | "Biblioteca escolar" | " Biblioteca privada" | "Biblioteca pública" | " Biblioteca universitária" | "Casa de espetáculo" | "Centro comunitário" | "Centro cultural itinerante" | "Centro cultural privado" | "Centro cultural público" |"Centro de artesanato" | "Centro de tradições" | "Centro espírita" | "Cinema" | "Circo" | "Clube social" | "Coleções" | "Concha acústica" | "Escola livre de artes cênicas" | "Escola livre de artes visuais" | "Escola livre de audiovisual" | "Escola livre de cultura popular" | "Escola livre de cultura tradicionalista" | "Escola livre de dança" | "Escola livre de hip-hop" | "Escola livre de música" | "Espaço para eventos" | "Espaço público para projeção de filmes" | "Estúdio" | "Galeria de arte" | "Ginásio poliesportivo" | "Igreja" | "Instituição privada" | " Instituição pública" | "Livaria" | "Museu privado" | "Museu público" | "Praça" | "Rádio comunitária" | "Sala de leitura" | "Sala multiuso" | "Sebo (livros usados)" | "Teatro privado" | "Teatro públcio" | "Terreiro" | "Videolocadora" | "Outros"

export type CulturalSpaceEntranceType = "Espaço privado" | "Espaço público"

export type CulturalSpaceSphereTypes = "Federal" | "Estadual" | "Municipal" | "Associação" | "Empresa" | "Fundação" | "Particular" | "Religiosa" | "Mista" | "Entidade sindical" | "Coletivo" | "Outros"
 
export type AgeRestrictionTypes = "Livre" | "10" | "12" | "14" | "16" | '18'

export type EventFrequencyTypes = "Semanal" | "Quinzenal" | "Mensal" | "Semestral" | "Anual" | "Única apresentação"

export type CulturalSpaceAcessibilityType = "Banheiros adaptados" | "Bebedouro adaptado" | "Cadeira de rodas para uso do visitante" | "Circuito de visitação adaptado" | "Corrimão nas escadas e rampas" | "Elevador adaptado" | "Rampa de acesso" | "Sanitário adaptado" | "Sinalização tátil" | "Vaga de estacionamento exclusiva para deficientes" | "Vaga de estacionamento exclusiva para idosos" | "Outros"

export type CulturalSpaceEntryTypes = "Acesso gratuito" | "Acesso pago" | "Misto"

export enum Races {
    branca = "Branca",
    indigena = "Indígena",
    parda = 'Parda',
    preta = 'Preta',
    amarela = 'Amarela'
}

export interface ICulturalSpaceModel {
    publicEmail?: string
    culturalSpaceName: string
    culturalSpaceCategory: CulturalCategoryTypes[]
    culturalSpaceDescription: string
    culturalSpaceEntry: CulturalSpaceEntranceType
    culturalSpaceSphere: CulturalSpaceSphereTypes
    accessible: boolean
    accessibilityType: CulturalSpaceAcessibilityType
    culturalSpaceCapacity: string
    openingHours: string
    closingHours: string
    website?: string
    facebook?: string
    instagram?: string
    contactNumber: string
    publicPhone?: string
    publicPhoneAdditional?: string
    entryType: CulturalSpaceEntryTypes
    
    
}

export interface IAgentModel {
    privateEmail: string
    publicEmail: string
    agentType: "pessoa_física" | "pessoa_jurídica"
    address: string
    fullNamePrivate: string
    fullNamePublic: string
    birthday_or_founding: string
    race: RaceTypes
    categories: CulturalCategoryTypes[]
    professionalRecord?: string
    description: string
    youtube?: string
    facebook?: string
    instagram?: string
    privatePhone: string
    publicPhone?: string
}

export interface IEventModel {
    privateEmail: string
    publicEmail: string
    eventName: string
    eventDescription: string
    eventEntry: string
    startingDate: string
    endingDate: string
    openingHours: string
    closingHours: string
    eventAddress: string
    eventAgeRestriction: AgeRestrictionTypes
    eventFrequency: EventFrequencyTypes
    websiteURL?: string
    eventFacebookURL?: string
    contactPhone: string
    eventHead: string
}