import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('image-to-pdf')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
