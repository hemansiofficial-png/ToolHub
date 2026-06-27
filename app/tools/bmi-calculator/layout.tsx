import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('bmi-calculator')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
