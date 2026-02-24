<template>
	<article
		class="overflow-auto"
	>
		<div
			v-if="status ==='pending'"
			aria-busy="true"
		/>
		<template v-else-if="status ==='error'">
			{{ error }}
		</template>
		<table
			v-else
			class="table"
		>
			<thead>
				<tr>
					<th
						v-for="column in tableData?.columns"
						:key="column"
					>
						{{ column }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="row in tableData?.rows"
					:key="row.join(',')"
				>
					<td
						v-for="cell in row"
						:key="cell"
					>
						{{ cell }}
					</td>
				</tr>
			</tbody>
		</table>
	</article>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
	rowsNum?: number;
}>(), { rowsNum: 100 });

const tableParams = {
	rowsNum: props.rowsNum,
	delay: 200,
};

const { data: tableData, error, status } = await useFetch("/api/table", { lazy: true, query: tableParams });
</script>
