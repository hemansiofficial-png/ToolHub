import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('character-counter')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
